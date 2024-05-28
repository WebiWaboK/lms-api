// api/server.js

const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const adminRoutes = require('./routes/adminRoutes');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

app.use('/api/admin', adminRoutes);

app.listen(port, () => {
    console.log(`API Server running on port ${port}`);
});
