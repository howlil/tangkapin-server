const Joi = require('joi');
const ValidatorFactory = require('./factory.validation');

class CCTVValidation {
    static create() {
        return ValidatorFactory.create({
            name: Joi.string()
                .required()
                .messages({
                    'any.required': 'Nama CCTV wajib diisi'
                }),
            location: Joi.string()
                .required()
                .messages({
                    'any.required': 'Lokasi CCTV wajib diisi'
                }),
            description: Joi.string()
                .required()
                .messages({
                    'any.required': 'Deskripsi CCTV wajib diisi'
                }),
            IP: Joi.string()
                .required()
                .ip()
                .messages({
                    'any.required': 'IP CCTV wajib diisi',
                    'string.ip': 'Format IP tidak valid'
                }),
            camera_type: Joi.string()
                .required()
                .messages({
                    'any.required': 'Tipe kamera wajib diisi'
                })
        });
    }

    static update() {
        return ValidatorFactory.create({
            name: Joi.string()
                .optional(),
            location: Joi.string()
                .optional(),
            description: Joi.string()
                .optional(),
            IP: Joi.string()
                .ip()
                .optional()
                .messages({
                    'string.ip': 'Format IP tidak valid'
                }),
            camera_type: Joi.string()
                .optional()
        });
    }

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
                .valid('ACTIVE', 'INACTIVE', 'MAINTENANCE')
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

module.exports = CCTVValidation; 