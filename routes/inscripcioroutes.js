const express = require('express');
const router = express.Router();
const InscripcionController = require('../controllers/incripcioncontroller');

// Definir las rutas de inscripción
router.post('/', InscripcionController.inscribirUsuario);  // Inscribir usuario
router.delete('/:id', InscripcionController.cancelarInscripcion); // Cancelar inscripción

module.exports = router;
