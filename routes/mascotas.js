const express = require('express');
const router = express.Router();
const petController = require('../controllers/petController');
const verificarToken = require('../middleware/verificarToken');

//Crear mascota
router.use(verificarToken);

router.post('/registro',verificarToken, petController.crearMascota);

module.exports = router;