const usuarioService = require('../services/usuarioservices')
class usuarioController {
    static async traerUsuarios(res, req) {
        try {
            let usuarios = await usuarioService.TraerUsuarios();
            res.json(usuarios);
        } catch(e) {
            res.json({e: 'Error al traer usuarios'});
        }
    }

    static async obtenerUsuarioID(req, res) {
        try {
            let usuario = await usuarioService.obtenerUsuarioId(req.params.id);
            res.json(usuario);
        } catch(e) {
            res.json({e: 'Error al obtener usuario'});
        }
    }

    static async crearUsuario(req, res) {
        try {
            let nuevoUsuario = await usuarioService.crearUsuario(req.body);
            res.json(nuevoUsuario);
        } catch(e) {
            res.json({e: 'Error al crear usuario'});
        }
    }

    static async actualizarUsuario(req, res) {
        try {
            let usuarioActualizado = await usuarioService.actualizarUsuario(req.params.id, req.body);
            res.json(usuarioActualizado);
        } catch(e) {
            res.json({e: 'Error al actualizar usuario'});
        }
    }

    static async eliminarUsuario(req, res) {
        try {
            let usuarioEliminado = await usuarioService.eliminarUsuario(req.params.id);
            res.json(usuarioEliminado);
        } catch(e) {
            res.json({e: 'Error al eliminar usuario'});
        }
    }
    static async listarUsuarios(req, res) {
        try {
          const usuarios = await usuarioService.listarUsuarios();
          res.json(usuarios);
        } catch (error) {
          res.json({ error: error.message });
        }
      }
    }

module.exports=usuarioController
