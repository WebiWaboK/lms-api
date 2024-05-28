// api/routes/adminRoutes.js

const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.post('/login', adminController.adminLogin);
router.post('/createUser', adminController.createUser);

module.exports = router;