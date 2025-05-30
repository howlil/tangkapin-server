const Joi = require('joi');
const ValidatorFactory = require('./factory.validation');

class PoliceValidation {
    static listActiveReports() {
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
                .valid('new', 'assigned', 'in_progress', 'verified', 'completed', 'rejected')
                .optional()
                .messages({
                    'any.only': 'Status tidak valid'
                }),
            search: Joi.string()
                .optional()
                .allow('')
        });
    }

    static listNotifications() {
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
                .valid('read', 'unread')
                .optional()
                .messages({
                    'any.only': 'Status tidak valid'
                }),
            search: Joi.string()
                .optional()
                .allow('')
        });
    }

    static updateReportStatus() {
        return ValidatorFactory.create({
            status: Joi.string()
                .valid('in_progress', 'completed')
                .required()
                .messages({
                    'any.required': 'Status wajib diisi',
                    'any.only': 'Status harus in_progress atau completed'
                }),
            description: Joi.string()
                .optional()
                .allow('')
        });
    }

    static updateTracking() {
        return ValidatorFactory.create({
            latitude: Joi.number()
                .min(-90)
                .max(90)
                .required()
                .messages({
                    'any.required': 'Latitude wajib diisi',
                    'number.base': 'Latitude harus berupa angka',
                    'number.min': 'Latitude minimal -90',
                    'number.max': 'Latitude maksimal 90'
                }),
            longitude: Joi.number()
                .min(-180)
                .max(180)
                .required()
                .messages({
                    'any.required': 'Longitude wajib diisi',
                    'number.base': 'Longitude harus berupa angka',
                    'number.min': 'Longitude minimal -180',
                    'number.max': 'Longitude maksimal 180'
                }),
            status: Joi.string()
                .valid('on_the_way', 'arrived', 'completed', 'cancelled')
                .required()
                .messages({
                    'any.required': 'Status wajib diisi',
                    'any.only': 'Status tidak valid'
                }),
            description: Joi.string()
                .optional()
                .allow('')
        });
    }
}

module.exports = PoliceValidation;