const Joi = require('joi');
const ValidatorFactory = require('./factory.validation');

class DetectionValidation {
    static detect() {
        return ValidatorFactory.create({
            cctv_id: Joi.string()
                .required()
                .messages({
                    'any.required': 'ID CCTV wajib diisi'
                }),
            timestamp: Joi.date()
                .iso()
                .optional()
                .messages({
                    'date.base': 'Format timestamp tidak valid'
                }),
            report: Joi.object({
                title: Joi.string()
                    .required()
                    .messages({
                        'any.required': 'Judul laporan wajib diisi'
                    }),
                description: Joi.string()
                    .required()
                    .messages({
                        'any.required': 'Deskripsi laporan wajib diisi'
                    }),
                location: Joi.string()
                    .required()
                    .messages({
                        'any.required': 'Lokasi wajib diisi'
                    }),
                incident_type: Joi.string()
                    .valid('knife', 'gun')
                    .required()
                    .messages({
                        'any.required': 'Tipe insiden wajib diisi',
                        'any.only': 'Tipe insiden harus knife atau gun'
                    }),
                report_image: Joi.string()
                    .required()
                    .messages({
                        'any.required': 'Gambar laporan wajib diisi'
                    })
            }).required()
        });
    }
}

module.exports = DetectionValidation; 