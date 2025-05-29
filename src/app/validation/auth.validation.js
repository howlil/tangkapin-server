const Joi = require('joi');
const ValidatorFactory = require('./factory.validation');

class AuthValidation {
    static login() {
        return ValidatorFactory.create({
            email: Joi.string()
                .email()
                .required()
                .messages({
                    'string.email': 'Email harus valid',
                    'any.required': 'Email wajib diisi'
                }),
            password: Joi.string()
                .min(6)
                .required()
                .messages({
                    'string.min': 'Password minimal 6 karakter',
                    'any.required': 'Password wajib diisi'
                })
        });
    }

    static register() {
        return ValidatorFactory.create({
            name: Joi.string()
                .required()
                .messages({
                    'any.required': 'Nama wajib diisi'
                }),
            email: Joi.string()
                .email()
                .required()
                .messages({
                    'string.email': 'Email harus valid',
                    'any.required': 'Email wajib diisi'
                }),
            phone: Joi.string()
                .pattern(/^[0-9]+$/)
                .required()
                .messages({
                    'string.pattern.base': 'Nomor telepon hanya boleh berisi angka',
                    'any.required': 'Nomor telepon wajib diisi'
                }),
            address: Joi.string()
                .required()
                .messages({
                    'any.required': 'Alamat wajib diisi'
                }),
            password: Joi.string()
                .min(6)
                .required()
                .messages({
                    'string.min': 'Password minimal 6 karakter',
                    'any.required': 'Password wajib diisi'
                })
        });
    }
}

module.exports = AuthValidation; 