const userService = require('../services/userService');
const jwt = require('jsonwebtoken');

async function registrarUsuario(req, res) {
    const { datos } = req.body;
    try {
        if (!datos.firstName || !datos.lastName || !datos.email || !datos.password || !datos.role) {
            throw new Error('Formato incorrecto');
        }
        await userService.registrarUsuario(datos.firstName, datos.lastName, datos.email, datos.password, datos.role); // Cambiado de `userService.registrar` a `userService.registrarUsuario`
        res.status(201).send('Usuario Registrado');
    } catch (error) {
        console.error('No funca el controller', error);
        res.status(500).send('Error de api');
    }
}

module.exports = {
    registrarUsuario
};
