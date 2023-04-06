import { Clase_com } from "./classes/clase_com";
import { Clase_sim } from "./classes/clase_sim";
import { Application } from "express"
import { Controller } from "./classes/controller";

import * as bodyParser from "body-parser";
import * as express from "express";


export const init = (app: Application, receta: Controller) => {
    app.get('/', (req, res) => {
        res.send(receta)
    })

    app.get('/:nombre', (req, res) => {
        let receta_recibida = receta.getRecetasPorNombre(req.params.nombre)
        res.send(receta_recibida)
    })

    app.post('/', (req, res) => {
        receta.addHijo(req.body.receta)
        res.json(req.body.receta)
    })

    app.delete('/:nombre', (req, res) => {
        let receta_recibida = receta.getRecetasPorNombre(req.params.nombre)
        if(receta_recibida !== null)
            receta.borrarElemento(receta_recibida);
        res.send(receta)
    })

    app.put('/', (req, res) => {
        receta.modificarElemento(req.body.receta)
        res.send()
    })
}