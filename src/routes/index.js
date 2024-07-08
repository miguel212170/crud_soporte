const express = require('express');
const credencialRouter = require('./credencial.router');
const router = express.Router();

// colocar las rutas aquí

router.use('/credenciales', credencialRouter)

module.exports = router;