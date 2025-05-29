const Joi = require('joi');
const ValidatorFactory = require('./factory.validation');

class NotificationValidation {
    static list() {
        return ValidatorFactory.create({
            page: Joi.number()
                .integer()
                .min(1)
                .optional()
                .default(1)
                .messages({
                    'number.base': 'Halaman harus berupa angka',
                    'number.min': 'Halaman minimal 1'
                }),
            limit: Joi.number()
                .integer()
                .min(1)
                .max(100)
                .optional()
                .default(10)
                .messages({
                    'number.base': 'Limit harus berupa angka',
                    'number.min': 'Limit minimal 1',
                    'number.max': 'Limit maksimal 100'
                }),
            status: Joi.string()
                .valid('READ', 'UNREAD')
                .optional()
                .messages({
                    'any.only': 'Status tidak valid'
                }),
            search: Joi.string()
                .optional()
                .allow('')
        });
    }
}

module.exports = NotificationValidation; 