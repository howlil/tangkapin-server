const jwt = require('jsonwebtoken');
const { UnauthorizedError, ForbiddenError } = require('../../libs/http/errors.http');
const { JWT_SECRET } = require('../../libs/configs/env.config');

class AuthMiddleware {
    #verifyToken(token) {
        try {
            return jwt.verify(token, JWT_SECRET);
        } catch (error) {
            throw new UnauthorizedError('Invalid token');
        }
    }

    authenticate = (req, res, next) => {
        try {
            const authHeader = req.headers.authorization;
            if (!authHeader?.startsWith('Bearer ')) {
                throw new UnauthorizedError('No token provided');
            }

            const token = authHeader.split(' ')[1];
            const decoded = this.#verifyToken(token);

            req.user = decoded;
            next();
        } catch (error) {
            next(error);
        }
    }

    authorize = (...allowedRoles) => {
        return (req, res, next) => {
            try {
                if (!req.user) {
                    throw new UnauthorizedError('User not authenticated');
                }

                if (!allowedRoles.includes(req.user.role)) {
                    throw new ForbiddenError('Insufficient permissions');
                }

                next();
            } catch (error) {
                next(error);
            }
        };
    }
}

module.exports = new AuthMiddleware(); 