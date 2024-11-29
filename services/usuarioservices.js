const usuario=require('../models/usuariomodels')

class usuarioService {
    static async TraerUsuarios() {
        try {
            let usuarios = await usuario.findAll();
            return usuarios;
        } catch(e) {
            console.log("Error ", e);
        }
    }

    static async obtenerUsuarioId(id) {
        try {
            let Usuario = await usuario.findByPK(id);
            if(!Usuario) {
                console.log("Usuario no encontrado");
            } else {
                return Usuario;
            }
        } catch(e) {
            console.log("Error al obtener el usuario ", e);
        }
    }

    static async crearUsuario(datos) {
        try {
            let nuevoUsuario = await usuario.create(datos);
            return nuevoUsuario;
        } catch(e) {
            console.log("Error al crear usuario", e);
        }
    }

    static async actualizarUsuario(id, datos) {
        try {
            let usuarioAct = await usuario.update(
                datos, 
                { where: { id: id } }
            );
            if (usuarioAct === 0) {
                return `No se ha podido actualizar el usuario`;
            } else {
                return `Usuario actualizado correctamente`;
            }
        } catch(e) {
            return ({ error: `Error ${e}` });
        }
    }

    static async eliminarUsuario(id) {
        try {
            let borrar = await usuario.destroy({ where: { id } });
            if (borrar === 0) {
                return `No se ha podido eliminar el usuario`;
            } else {
                return `Usuario eliminado correctamente`;
            }
        } catch(e) {
            return ({ error: `Error ${e}` });
        }
    }
    static async listarUsuarios() {
        try {
          const usuarios = await usuarios.findAll();
          return usuarios;
        } catch (error) {
          throw new Error('Error al listar usuarios: ' + error.message);
        }
      }
}
module.exports=usuarioService;
