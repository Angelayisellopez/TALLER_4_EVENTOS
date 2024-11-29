const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuariocontroller');

// Definir las rutas de usuarios
router.get('/', UsuarioController.listarUsuarios);  // Listar todos los usuarios
router.get('/:id', UsuarioController.obtenerUsuarioID);  // Obtener usuario por ID
router.post('/', UsuarioController.crearUsuario); // Crear usuario
router.put('/:id', UsuarioController.actualizarUsuario); // Actualizar usuario
router.delete('/:id', UsuarioController.eliminarUsuario); // Eliminar usuario

module.exports = router;

