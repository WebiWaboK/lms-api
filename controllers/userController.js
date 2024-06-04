const userService = require('../services/userService');

async function registrarUsuario(req, res) {
    const { firstName, lastName1, lastName2, email, password, role } = req.body;
    try {
        if (!firstName || !lastName1 || !lastName2 || !email || !password || !role) {
            throw new Error('Formato incorrecto');
        }
        await userService.registrarUsuario(firstName, lastName1, lastName2, email, password, role);
        res.status(201).send('Usuario Registrado');
    } catch (error) {
        console.error('Error en el controlador de usuario', error);
        res.status(500).send('Error de API');
    }
}

module.exports = {
    registrarUsuario
};
