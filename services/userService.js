const userModel = require('../models/userModel');

async function registrarUsuario(firstName, lastName1, lastName2, email, password, role = 'teacher') {
    try {
        await userModel.registrar(firstName, lastName1, lastName2, email, password, role);
    } catch (error) {
        console.error('Error en el servicio de usuario', error);
        throw error;
    }
}

module.exports = {
    registrarUsuario
};
