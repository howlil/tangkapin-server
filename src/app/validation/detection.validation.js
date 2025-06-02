const Joi = require('joi');
const ValidatorFactory = require('./factory.validation');

class DetectionValidation {
    static detect() {
        return ValidatorFactory.create({
            cctv_ip: Joi.string()
                .ip()
                .required()
                .messages({
                    'any.required': 'IP CCTV wajib diisi',
                    'string.ip': 'Format IP tidak valid'
                }),
            evidence_image: Joi.string()
                .required()
                .messages({
                    'any.required': 'Gambar evidence wajib diisi',
                    'string.base': 'Gambar evidence harus berupa string'
                }),
            weapon_type: Joi.string()
                .valid('knife', 'gun', 'guns', 'pistol')
                .required()
                .messages({
                    'any.required': 'Tipe senjata wajib diisi',
                    'any.only': 'Tipe senjata harus knife, gun, guns, atau pistol'
                }),
            timestamp: Joi.date()
                .iso()
                .optional()
                .messages({
                    'date.base': 'Format timestamp tidak valid',
                    'date.format': 'Timestamp harus dalam format ISO'
                }),
            confidence: Joi.number()
                .min(0)
                .max(1)
                .optional()
                .messages({
                    'number.base': 'Confidence harus berupa angka',
                    'number.min': 'Confidence minimal 0',
                    'number.max': 'Confidence maksimal 1'
                })
        });
    }
}

module.exports = DetectionValidation;