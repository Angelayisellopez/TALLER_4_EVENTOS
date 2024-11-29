let { DataTypes } = require('sequelize'); 
let sequelize = require('../config/db'); 

const inscripciones = sequelize.define('Usuario', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lugar: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dia: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    timestamps: false, 
    tableName: 'inscripciones',  
});
module.exports=inscripciones;