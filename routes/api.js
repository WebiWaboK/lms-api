const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/registrar', userController.registrarUsuario);

module.exports = router;