const InscripcionService = require('../services/inscripcionservices');

class InscripcionController {
  static async inscribirUsuario(req, res) {
    try {
      const { usuarioId, eventoId } = req.body;
      const evento = await InscripcionService.findByPk(eventoId);

      if (!evento) {
       res.json({ message: 'Evento no encontrado' });
      }

      // Verificar si hay espacio disponible
      const inscripciones = await InscripcionService.count({ where: { eventoId } });
      if (inscripciones >= evento.capacidad_maxima) {
        return res.json({ message: 'No hay espacio disponible en este evento' });
      }

      const inscripcion = await InscripcionService.create({ usuarioId, eventoId });
      res.json(inscripcion);
    } catch (error) {
      res.json({ error: 'Error al inscribir al usuario' });
    }
  }

  static async cancelarInscripcion(req, res) {
    try {
      const inscripcion = await InscripcionService.findByPk(req.params.id);

      if (!inscripcion) {
        return res.json({ message: 'Inscripción no encontrada' });
      }

      await inscripcion.destroy();
      res.json({ message: 'Inscripción cancelada' });
    } catch (error) {
      res.json({ error: 'Error al cancelar la inscripción' });
    }
  }
}

module.exports = InscripcionController;





