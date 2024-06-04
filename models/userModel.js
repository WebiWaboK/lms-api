const { obtenerConexion } = require('../config/db');

const getUserByUsername = async (username) => {
    const [rows] = await pool.execute('SELECT * FROM users WHERE username = ?', [username]);
    return rows[0];
};

async function registrar(firstName, lastName, email, password, role) {
    const conexion = await obtenerConexion();
    try {
        await conexion.query('INSERT INTO users (firstName, lastName, email, password, role) VALUES (?, ?, ?, ?, ?)', [firstName, lastName, email, password, role]);
        console.log('SI funca');
    } catch (error) {
        console.error('No funca', error);
        throw error;
    } finally {
        conexion.release();
    }
}

module.exports = {
    registrar // Cambiado de `resgistrar` a `registrar`
};
