const express = require('express');
const router = express.Router();
const EventoController = require('../controllers/eventoController');

// Definir las rutas de eventos
router.get('/:id', EventoController.obtenerEventos); 
router.post('/', EventoController.crearEvento);
router.put('/:id', EventoController.actualizarEvento); 
router.delete('/:id', EventoController.eliminarEvento); 
router.get('/informe', EventoController.generarInforme);

module.exports = router;
