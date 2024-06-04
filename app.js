const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const userController = require('./controllers/userController');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

// Rutas de la API
app.post('/api/registrar', userController.registrarUsuario);

app.listen(port, () => {
    console.log(`Servidor de la API iniciado en http://localhost:${port}`);
});
