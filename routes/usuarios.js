// routes/usuarios.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Ruta para registrar un nuevo usuario
router.post('/registro', userController.crear);
router.put('/:id',userController.actualizar);
router.delete('/:id',userController.eliminar);
// Ruta para listar todos los usuarios
router.get('/', userController.listar);
// Ruta para obtener un usuario por su ID
router.get('/:id', userController.obtenerUsuario);

// Otras rutas y controladores relacionados con usuarios
// Por ejemplo, ruta para iniciar sesión, actualizar perfil, etc.

module.exports = router;