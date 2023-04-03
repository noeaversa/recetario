import { Clase_com } from "./classes/clase_com";
import { Clase_sim } from "./classes/clase_sim";
import express from 'express';
import { Controller } from "./classes/controller";
import * as routes from "./routes"
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express"

export const start = (puerto: number, receta: Controller) => {
    const app = express();

    const options = {
        definition: {
          openapi: "3.0.1",
          info: {
            title: "REST API for Swagger Documentation",
            version: "1.0.0",
          },
          schemes: ["http", "https"],
          servers: [{ url: "http://localhost:9090/" }],
        },
        apis: [
          `${__dirname}/routes/example-route.ts`,
          "./dist/routes/example-route.js",
        ],
      };

    const swaggerSpec = swaggerJSDoc(options);

    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));
    app.set('view engine', 'ejs');

    app.listen(puerto);
    console.log("Server is listening on port 9090")

    routes.init(app, receta)
}