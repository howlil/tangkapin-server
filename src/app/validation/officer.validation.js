const Joi = require('joi');
const ValidatorFactory = require('./factory.validation');

class OfficerValidation {
    static listReports() {
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

    static verifyReport() {
        return ValidatorFactory.create({
            status: Joi.string()
                .valid('verified', 'in_progress', 'completed')
                .required()
                .messages({
                    'any.required': 'Status wajib diisi',
                    'any.only': 'Status harus verified, in_progress, atau completed'
                })
        });
    }

    static assignOfficer() {
        return ValidatorFactory.create({
            police_id: Joi.string()
                .required()
                .messages({
                    'any.required': 'ID polisi wajib diisi'
                })
        });
    }

    static listPolice() {
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
                .valid('available', 'busy', 'offline')
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

module.exports = OfficerValidation;