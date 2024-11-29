const Inscripcion = require('../models/inscripcionmodels');
const Evento = require('../models/eventosmodels');
const Usuario = require('../models/usuariomodels');

class InscripcionService {

  static async inscribirseEnEvento(eventoId, usuarioId) {
    const evento = await Evento.findByPk(eventoId);
    const usuario = await Usuario.findByPk(usuarioId);

    if (!evento) {
      throw new Error('El evento no existe');
    }
    if (!usuario) {
      throw new Error('El usuario no existe');
    }
    if (evento.inscripciones >= evento.capacidadMaxima) {
      throw new Error('El evento ha alcanzado su capacidad máxima');
    }


    const inscripcion = await Inscripcion.create({ eventoId, usuarioId });


    evento.inscripciones += 1;
    await evento.save();

    return inscripcion;
  }

  static async cancelarInscripcion(eventoId, usuarioId) {
    const inscripcion = await Inscripcion.findOne({
      where: {
        eventoId,
        usuarioId
      }
    });

    if (!inscripcion) {
      throw new Error('No se encontró la inscripción para cancelar');
    }


    await inscripcion.destroy();


    const evento = await Evento.findByPk(eventoId);
    evento.inscripciones -= 1;
    await evento.save();

    return { message: 'Inscripción cancelada' };
  }

 
  static async obtenerInscripcionesPorUsuario(usuarioId) {
    return await Inscripcion.findAll({
      where: { usuarioId },
      include: [Evento]
    });
  }


  static async obtenerInscripcionesPorEvento(eventoId) {
    return await Inscripcion.findAll({
      where: { eventoId },
      include: [Usuario]
    });
  }
}

module.exports = InscripcionService;
