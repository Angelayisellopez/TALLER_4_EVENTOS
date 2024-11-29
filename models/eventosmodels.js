let { DataTypes } = require('sequelize'); 
let sequelize = require('../config/db'); 

const Eventos = sequelize.define('Eventos', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    capacidadMaxima: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    timestamps: false, 
    tableName: 'Eventos',  
});
module.exports=Eventos;