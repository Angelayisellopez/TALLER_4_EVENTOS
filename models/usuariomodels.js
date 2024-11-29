let { DataTypes } = require('sequelize'); 
let sequelize = require('../config/db'); 

const Usuario = sequelize.define('Usuario', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    timestamps: false, 
    tableName: 'Usuarios',  
});
module.exports=Usuario;