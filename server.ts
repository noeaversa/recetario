import { Clase_com } from "./classes/clase_com";
import { Clase_sim } from "./classes/clase_sim";
import express from 'express';
import { Controller } from "./classes/controller";
import * as routes from "./routes"
import swaggerUi from "swagger-ui-express";
import swaggerSetup from "./Swagger/Swagger";
import { Connection } from "mysql";
import * as database_config from "./database/database_config"

import yaml from "yaml";
import fs from "fs";


export const start = (puerto: number, receta: Controller) => {
    const app = express();
    const file = fs.readFileSync(`${__dirname}/Swagger/swagger.yaml`, "utf8");
    const swaggerDocument = yaml.parse(file);

    database_config.connection.connect((err) => {
        if (err) {
          console.error('Error al conectar a la base de datos: ', err);
          return;
        }
      
        console.log('Conexión a la base de datos exitosa');
      });
      

    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(Object.assign(swaggerSetup, swaggerDocument)));
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));
    app.set('view engine', 'ejs');

    app.listen(puerto);
    console.log("Server is listening on port 9090")

    routes.init(app, receta)
}