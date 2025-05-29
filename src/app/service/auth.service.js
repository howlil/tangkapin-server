const { prisma } = require('../../libs/configs/prisma.config');
const { BadRequestError, UnauthorizedError, NotFoundError, handlePrismaError } = require('../../libs/http/error.handler.http');
const TokenUtils = require('../../libs/utils/token.utils');
const PasswordUtils = require('../../libs/utils/password.utils');

class AuthService {
    async login(email, password) {
        if (!email || !password) {
            throw new BadRequestError('Email dan password harus diisi');
        }

        try {
            // Try to find user in Owner table
            const user = await prisma.Owner.findFirst({
                where: { email: email.toLowerCase().trim() }
            });

            if (!user) {
                throw new UnauthorizedError('Email atau password salah');
            }

            // Check if we should verify against passwordHash or password field
            const passwordField = user.passwordHash ? 'passwordHash' : 'password';
            const hashedPassword = user[passwordField];

            if (!hashedPassword) {
                throw new UnauthorizedError('User data is corrupted');
            }

            const isValidPassword = await PasswordUtils.verify(password, hashedPassword);
            if (!isValidPassword) {
                throw new UnauthorizedError('Email atau password salah');
            }

            const token = await TokenUtils.generateToken(user.id);

            return {
                token,
                user: {
                    id: user.id,
                    name: user.name,
                    role: 'OWNER'
                }
            };
        } catch (error) {
            // Try officer login if owner login fails
            try {
                const officer = await prisma.Officer.findFirst({
                    where: { email: email.toLowerCase().trim() }
                });

                if (!officer) {
                    throw new UnauthorizedError('Email atau password salah');
                }

                // Check if we should verify against passwordHash or password field
                const passwordField = officer.passwordHash ? 'passwordHash' : 'password';
                const hashedPassword = officer[passwordField];

                if (!hashedPassword) {
                    throw new UnauthorizedError('User data is corrupted');
                }

                const isValidPassword = await PasswordUtils.verify(password, hashedPassword);
                if (!isValidPassword) {
                    throw new UnauthorizedError('Email atau password salah');
                }

                const token = await TokenUtils.generateToken(officer.id);

                return {
                    token,
                    user: {
                        id: officer.id,
                        name: officer.name,
                        role: 'OFFICER'
                    }
                };
            } catch (officerError) {
                // If both fail, return the original error
                throw handlePrismaError(error);
            }
        }
    }

    async register(userData) {
        try {
            const hashedPassword = await PasswordUtils.hash(userData.password);

            const user = await prisma.Owner.create({
                data: {
                    name: userData.name,
                    email: userData.email.toLowerCase().trim(),
                    phone: userData.phone,
                    address: userData.address,
                    passwordHash: hashedPassword,
                    createdAt: new Date()
                }
            });

            return {
                id: user.id,
                name: user.name,
                email: user.email
            };
        } catch (error) {
            throw handlePrismaError(error);
        }
    }

    async getCurrentUser(userId) {
        try {
            // Try to find the user in the Owner table first
            const user = await prisma.Owner.findUnique({
                where: { id: userId },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    phone: true,
                    address: true,
                    latitude: true,
                    longitude: true
                }
            });

            if (user) {
                return {
                    ...user,
                    role: 'OWNER'
                };
            }

            // If not found in Owner, try Officer
            const officer = await prisma.Officer.findUnique({
                where: { id: userId },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    phone: true,
                    address: true,
                    latitude: true,
                    longitude: true,
                    status: true
                }
            });

            if (officer) {
                return {
                    ...officer,
                    role: 'OFFICER'
                };
            }

            // If not found in Officer, try Police
            const police = await prisma.Police.findUnique({
                where: { id: userId },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    phone: true,
                    address: true,
                    latitude: true,
                    longitude: true,
                    status: true
                }
            });

            if (police) {
                return {
                    ...police,
                    role: 'POLICE'
                };
            }

            throw new NotFoundError('User tidak ditemukan');
        } catch (error) {
            throw handlePrismaError(error);
        }
    }

    async logout(token) {
        try {
            return await TokenUtils.revokeToken(token);
        } catch (error) {
            throw handlePrismaError(error);
        }
    }
}

module.exports = new AuthService();