import * as dotenv from "dotenv"
import mysql, { Connection } from 'mysql';
import { Extension } from "typescript";

/*
export const database =  {
    DataSource: {
        db_host: process.env.MY_SQL_DB_HOST,
        db_user: process.env.MY_SQL_DB_USER,
        db_password: process.env.MY_SQL_DB_PASSWORD,
        db_port: process.env.MY_SQL_DB_PORT,
        db_database: process.env.MY_SQL_DB_DATABASE
    }
};*/

export const connection: Connection = mysql.createConnection({
    host: 'localhost',
    user: 'alumno',
    password: 'alumnoipm',
    database: 'recetario'
})
