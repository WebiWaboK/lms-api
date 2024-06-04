const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const adminRoutes = require('./routes/adminRoutes');
const userController = require('./controllers/userController');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

app.use('/api/admin', adminRoutes);

app.post('/api/registrar', userController.registrarUsuario);

app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});
