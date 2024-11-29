const Evento = require('../models/eventosmodels')
class EventoService {
  

    static async crearEvento(datosEvento) {
      try {
        const nuevoEvento = await Evento.crearEvento(datosEvento);
        return nuevoEvento;
      } catch (error) {
        console.log('Error al crear el evento: ' + error.message);
      }
    }
  
    static async actualizarEvento(id, datosActualizados) {
      try {
        const [filasActualizadas] = await Evento.update(datosActualizados, {
          where: { id },
        });
  
        if (filasActualizadas === 0) {
            console.log('Evento no encontrado o no se pudo actualizar.');
        }
  
        return 'Evento actualizado correctamente';
      } catch (error) {
        console.log('Error al actualizar el evento: ' + error.message);
      }
    }
  
    // Eliminar evento
    static async eliminarEvento(id) {
      try {
        const filasEliminadas = await Evento.destroy({ where: { id } });
  
        if (filasEliminadas === 0) {
            console.log('Evento no encontrado o no se pudo eliminar.');
        }
  
        return 'Evento eliminado correctamente';
      } catch (error) {
        console.log('Error al eliminar el evento: ' + error.message);
      }
    }
  
    

  }
  
  module.exports = EventoService;