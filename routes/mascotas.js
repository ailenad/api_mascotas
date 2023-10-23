const express = require('express');
const router = express.Router();
const verificarToken = require('../middleware/verificarToken');
const petController = require('../controllers/petController');
//Crear mascota
//  router.use(verificarToken);

router.post('/registro',  petController.crearMascota);
router.put('/:id', petController.modificarMascota);
router.delete('/:id', petController.eliminarMascota);
router.get('/:id', petController.obtenerMascota);
router.get('/', petController.listaMascotas);

module.exports = router;