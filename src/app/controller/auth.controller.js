const authService = require('../service/auth.service');
const Http = require('../../libs/http');
const ErrorHandler = require('../../libs/http/error.handler.http');

class AuthController {
    login = ErrorHandler.asyncHandler(async (req, res) => {
        const { email, password } = req.body;
        const result = await authService.login(email, password);
        return Http.Response.success(res, result, 'Login berhasil');
    });

    register = ErrorHandler.asyncHandler(async (req, res) => {
        const result = await authService.register(req.body);
        return Http.Response.created(res, result, 'Registrasi berhasil');
    });

    getCurrentUser = ErrorHandler.asyncHandler(async (req, res) => {
        const userId = req.user.id;
        const result = await authService.getCurrentUser(userId);
        return Http.Response.success(res, result, 'Data user berhasil diambil');
    });

    logout = ErrorHandler.asyncHandler(async (req, res) => {
        const token = Http.Request.getAuthToken(req);
        if (!token) {
            return Http.Response.unauthorized(res, 'Token tidak ditemukan');
        }
        await authService.logout(token);
        return Http.Response.success(res, null, 'Logout berhasil');
    });
}

module.exports = new AuthController(); 