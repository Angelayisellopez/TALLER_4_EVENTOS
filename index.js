const dotenv = require('dotenv');
const sequelize = require('./config/db');
dotenv.config();
const express = require('express');
const app = express();
const port = process.env.PORT 
app.use(express.json()); 

const inscripcionRoutes=require('./routes/inscripcioroutes');
const eventoRoutes=require('./routes/eventoroutes');
const usuarioRoutes=require('./routes/usuarioroutes');

// Usa las rutas en el servidor
app.use('/api/inscripcion', inscripcionRoutes); 
app.use('/api/evento', eventoRoutes); 
app.use('/api/usuario', usuarioRoutes);

// Sincronización de la base de datos y ejecución del servidor
let startDB = async () => {
    try {
        await sequelize.sync();
        console.log("Base de datos sincronizada");
        
        app.listen(port, () => {
            console.log(`El servidor está corriendo en el puerto ${port}`);
        });
    } catch (e) {
        console.log("Error en la base de datos: ", e);
    }
}

startDB();
