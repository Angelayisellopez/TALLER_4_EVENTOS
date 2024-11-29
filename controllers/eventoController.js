const EventoService = require('../services/eventoServieces');


class EventoController {
  static async obtenerEventos(req, res) {
    try {
      const eventos = await EventoService.findAll();
      res.json(eventos);
    } catch (error) {
      res.json({ error: 'Error al obtener los eventos' });
    }
  }

  
  static async crearEvento(req, res) {
    try {
      const { nombre, descripcion, fecha, lugar, capacidad_maxima } = req.body;
      const nuevoEvento = await EventoService.create({ nombre, descripcion, fecha, lugar, capacidad_maxima });
      res.json(nuevoEvento);
    } catch (error) {
      res.json({ error: 'Error al crear el evento' });
    }
  }

  static async actualizarEvento(req, res) {
    try {
      const evento = await EventoService.findByPk(req.params.id);
      if (!evento) {
        return res.json({ message: 'Evento no encontrado' });
      }

      const { nombre, descripcion, fecha, lugar, capacidad_maxima } = req.body;
      await EventoService.update({ nombre, descripcion, fecha, lugar, capacidad_maxima });
      res.json(evento);
    } catch (error) {
      res.json({ error: 'Error al actualizar el evento' });
    }
  }

  static async eliminarEvento(req, res) {
    try {
      const evento = await EventoService.findByPk(req.params.id);
      if (!evento) {
        return res.json({ message: 'Evento no encontrado' });
      }

      await evento.destroy();
      res.json({ message: 'Evento eliminado' });
    } catch (error) {
      res.json({ error: 'Error al eliminar el evento' });
    }
  }
    static async generarInforme(req, res) {
        try {
            // Obtenemos todos los eventos y contamos las inscripciones asociadas
            const eventosConInscripciones = await EventoService.findAll({
                include: [{
                    model: Inscripcion,
                    attributes: [],
                    required: false
                }],
                attributes: [
                    'id',
                    'nombre',
                    'descripcion',
                    'fecha',
                    'lugar',
                    'capacidad_maxima',
                    [sequelize.fn('COUNT', sequelize.col('Inscripciones.id')), 'numero_inscripciones']
                ],
                group: ['Evento.id'],
                order: [[sequelize.fn('COUNT', sequelize.col('Inscripciones.id')), 'DESC']] // Ordenar por el número de inscripciones
            });

            // Retornamos el resultado
            res.json(eventosConInscripciones);
        } catch (e) {
            console.log(e);
            res.json({ error: 'Error al generar el informe' });
        }
    }
}



module.exports = EventoController;