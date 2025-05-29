const { prisma } = require('../../libs/configs/prisma.config');
const { UnauthorizedError, NotFoundError, handlePrismaError } = require('../../libs/http/error.handler.http');
const TokenUtils = require('../../libs/utils/token.utils');
const PasswordUtils = require('../../libs/utils/password.utils');

class AuthService {
    async login(email, password) {
        if (!email || !password) {
            throw new BadRequestError('Email dan password harus diisi');
        }

        try {
            const user = await prisma.owner.findFirst({
                where: { email: email.toLowerCase().trim() }
            });

            if (!user) {
                throw new UnauthorizedError('Email atau password salah');
            }

            const isValidPassword = await PasswordUtils.verify(password, user.password);
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
            throw handlePrismaError(error);
        }
    }

    async register(userData) {
        try {
            const hashedPassword = await PasswordUtils.hash(userData.password);

            const user = await prisma.owner.create({
                data: {
                    ...userData,
                    password: hashedPassword
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
            const user = await prisma.owner.findUnique({
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

            if (!user) {
                throw new NotFoundError('User tidak ditemukan');
            }

            return {
                ...user,
                role: 'OWNER'
            };
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