let Sequelize=require('sequelize');
let dotenv=require('dotenv');
dotenv.config();
let sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect:'mysql',
        loggin:console.log
    }
);
module.exports=sequelize