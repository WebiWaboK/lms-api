const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');

exports.adminLogin = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await userModel.getUserByUsername(username);
        if (user && user.role === 'admin') {
            const match = await bcrypt.compare(password, user.password);
            if (match) {
                res.status(200).send('Inicio de sesión exitoso');
            } else {
                res.status(401).send('Nombre de usuario o contraseña incorrectos');
            }
        } else {
            res.status(401).send('Nombre de usuario o contraseña incorrectos');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Error del servidor');
    }
};

exports.createUser = async (req, res) => {
    const { firstName, lastName, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { firstName, lastName, email, password: hashedPassword, role };

    try {
        await userModel.createUser(user);
        res.status(201).send('Usuario creado exitosamente');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al crear el usuario');
    }
};
