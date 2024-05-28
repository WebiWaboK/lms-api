const pool = require('../config/db');

const getUserByUsername = async (username) => {
    const [rows] = await pool.execute('SELECT * FROM users WHERE username = ?', [username]);
    return rows[0];
};

const createUser = async (user) => {
    const { firstName, lastName, email, password, role } = user;
    await pool.execute(
        'INSERT INTO users (firstName, lastName, email, password, role) VALUES (?, ?, ?, ?, ?)',
        [firstName, lastName, email, password, role]
    );
};

module.exports = {
    getUserByUsername,
    createUser
};
