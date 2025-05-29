const jwt = require('jsonwebtoken');
const { prisma } = require('../configs/prisma.config');
const { UnauthorizedError } = require('../http/errors.http');
const { logger } = require('../configs/logger.config');
require('dotenv').config();


class TokenUtils {
  static #jwtSecret = process.env.JWT_SECRET || 'your-super-secret-key';
  static #jwtExpires = process.env.JWT_EXPIRES || '24h';

  static async generateToken(userId, role = 'OWNER') {
    const expiresIn = this.#jwtExpires;

    try {
      const token = jwt.sign({ userId, role }, this.#jwtSecret, { expiresIn });
  
      // Store token in database if Token model exists
      try {
        if (prisma.Token) {
          await prisma.Token.create({
            data: {
              userId,
              token
            }
          });
        } else {
          logger.warn('Token model not found in Prisma client. Skipping token storage.');
        }
      } catch (error) {
        logger.error('Error storing token in database:', error);
        // Continue even if token storage fails
      }
  
      return token;
    } catch (error) {
      logger.error('Error generating token:', error);
      throw error;
    }
  }

  static async verifyToken(token) {
    try {
      const decoded = jwt.verify(token, this.#jwtSecret);

      // Check if token exists in database (if Token model exists)
      let tokenValid = true;
      try {
        if (prisma.Token) {
          const tokenRecord = await prisma.Token.findFirst({
            where: {
              token,
              userId: decoded.userId
            }
          });
  
          tokenValid = !!tokenRecord;
        }
      } catch (error) {
        logger.error('Error verifying token in database:', error);
        // Continue with JWT verification even if database check fails
      }

      if (!tokenValid) {
        throw new UnauthorizedError('Token tidak valid');
      }

      // Check if user exists in any user table
      let user = null;
      
      try {
        // Try Owner first
        if (prisma.Owner) {
          user = await prisma.Owner.findUnique({
            where: { id: decoded.userId }
          });
        }
        
        // Then try Officer
        if (!user && prisma.Officer) {
          user = await prisma.Officer.findUnique({
            where: { id: decoded.userId }
          });
        }
        
        // Finally try Police
        if (!user && prisma.Police) {
          user = await prisma.Police.findUnique({
            where: { id: decoded.userId }
          });
        }
      } catch (error) {
        logger.error('Error finding user:', error);
      }

      if (!user) {
        throw new UnauthorizedError('User tidak ditemukan');
      }

      return { ...decoded, user };
    } catch (error) {
      if (error instanceof jwt.JsonWebTokenError) {
        throw new UnauthorizedError('Token tidak valid');
      }

      if (error instanceof jwt.TokenExpiredError) {
        throw new UnauthorizedError('Token kadaluarsa');
      }

      throw error;
    }
  }

  static async revokeToken(token) {
    try {
      // Remove token from database if Token model exists
      if (prisma.Token) {
        await prisma.Token.deleteMany({
          where: { token }
        });
      } else {
        logger.warn('Token model not found in Prisma client. Cannot revoke token in database.');
      }
      return true;
    } catch (error) {
      logger.error('Error revoking token:', error);
      return false;
    }
  }

  static async revokeAllUserTokens(userId) {
    try {
      // Remove all user tokens from database if Token model exists
      if (prisma.Token) {
        await prisma.Token.deleteMany({
          where: { userId }
        });
      } else {
        logger.warn('Token model not found in Prisma client. Cannot revoke user tokens in database.');
      }
      return true;
    } catch (error) {
      logger.error('Error revoking all user tokens:', error);
      return false;
    }
  }
}

module.exports = TokenUtils;