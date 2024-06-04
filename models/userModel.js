const db = require('../config/db');

async function registrar(firstName, lastName1, lastName2, email, password, role = 'teacher') {
    const conexion = await db.obtenerConexion();
    try {
        await conexion.query('INSERT INTO teachers (first_name, last_name1, last_name2, email, password, role) VALUES (?, ?, ?, ?, ?, ?)', [firstName, lastName1, lastName2, email, password, role]);
        console.log('Usuario registrado exitosamente');
    } catch (error) {
        console.error('Error al registrar usuario', error);
        throw error;
    } finally {
        conexion.release();
    }
}

module.exports = {
    registrar
};
