const dotenv = require('dotenv');

dotenv.config();

const config = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 8080,

    // Database
    DATABASE_URL: process.env.DATABASE_URL,

    // JWT
    JWT_SECRET: process.env.JWT_SECRET || 'your-super-secret-key',
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '24h',

    // CORS
    CORS_ORIGIN: process.env.CORS_ORIGIN || '*',

    // Rate Limiting
    RATE_LIMIT_WINDOW: process.env.RATE_LIMIT_WINDOW || 15 * 60 * 1000, // 15 minutes
    RATE_LIMIT_MAX: process.env.RATE_LIMIT_MAX || 100, // 100 requests per window

    // Logging
    LOG_LEVEL: process.env.LOG_LEVEL || 'info',
    LOG_FILE: process.env.LOG_FILE || 'logs/app.log'
};

// Validate required environment variables
const requiredEnvVars = ['DATABASE_URL', 'JWT_SECRET'];

const missingEnvVars = requiredEnvVars.filter(envVar => !config[envVar]);
if (missingEnvVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingEnvVars.join(', ')}`);
}

module.exports = config; 