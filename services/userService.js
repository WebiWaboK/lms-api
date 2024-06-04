const userModel = require('../models/userModel');

async function registrarUsuario(firstName, lastName, email, password, role) {
    try {
        await userModel.registrar(firstName, lastName, email, password, role);
    } catch (error) {
        console.error('No funco el servicio', error);
        throw error;
    }
}

module.exports = { // Cambiado de `module.export` a `module.exports`
    registrarUsuario // Cambiado de `resgistrar` a `registrarUsuario`
};
