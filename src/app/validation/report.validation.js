const Joi = require('joi');
const ValidatorFactory = require('./factory.validation');

class ReportValidation {
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
                .valid('NEW', 'new', 'ASSIGNED', 'assigned', 'IN_PROGRESS', 'in_progress', 'VERIFIED', 'verified', 'COMPLETED', 'completed')
                .optional()
                .custom((value, helpers) => {
                    if (value) {
                        return value.toUpperCase();
                    }
                    return value;
                })
                .messages({
                    'any.only': 'Status tidak valid'
                }),
            search: Joi.string()
                .optional()
                .allow('')
        });
    }

    static createManual() {
        return ValidatorFactory.create({
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
                .valid('knife', 'guns', 'gun')
                .required()
                .messages({
                    'any.required': 'Tipe insiden wajib diisi',
                    'any.only': 'Tipe insiden harus knife atau gun'
                }),
            cctv_id: Joi.string()
                .optional(),
            report_image: Joi.string()
                .required()
                .messages({
                    'any.required': 'Gambar laporan wajib diisi'
                }),
            date: Joi.date()
                .iso()
                .optional()
                .messages({
                    'date.base': 'Format tanggal tidak valid'
                }),
            time: Joi.string()
                .pattern(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)
                .optional()
                .messages({
                    'string.pattern.base': 'Format waktu tidak valid (HH:MM)'
                })
        });
    }
}

module.exports = ReportValidation; 