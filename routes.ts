import { Clase_com } from "./classes/clase_com";
import { Clase_sim } from "./classes/clase_sim";
import { Application } from "express"
import { Controller } from "./classes/controller";
import * as database_config from "./database/database_config";

import * as express from "express";
import { Clase_abs } from "./classes/clase_abs";
import { RecetaControllerMYSQL } from "./classes/RecetaMysql";

const conexion = database_config.connection;

export const init = (app: Application, recetaMYSQL: RecetaControllerMYSQL) => {
    app.get('/recetas', (req, res) => {
        RecetaControllerMYSQL.obtenerTodasLasRecetas().then((recetas: Clase_com) => {
            res.send(recetas)
        }).catch((err) => {
            res.status(500).send();
        })     
    })

    app.get('/recetas/:nombre', (req, res) => {
        RecetaControllerMYSQL.obtenerRecetaEspecifica(req.params.nombre).then((recetas: Clase_sim) => {
            res.send(recetas)
        }).catch((err) => {
            res.status(500).send();
        }) 
    })

    app.post('/recetas', (req, res) => {
        RecetaControllerMYSQL.agregarNuevaReceta(req.body.nombre, req.body.descripcion, req.body.cantidad, req.body.medida).then((recetas: Clase_sim) => {
            res.send(recetas)
        }).catch((err) => {
            res.status(500).send();
        }) 
    })

    app.delete('/recetas/:nombre', (req, res) => {
        RecetaControllerMYSQL.eliminarReceta(req.params.nombre).then((recetas: Clase_sim) => {
            res.send(recetas)
        }).catch((err) => {
            res.status(500).send();
        }) 
    })

    app.put('/recetas/:nombre', (req, res) => {
        RecetaControllerMYSQL.modificarRecetaCompleta(req.params.nombre, req.body.descripcion, req.body.cantidad, req.body.medida).then((recetas: Clase_sim) => {
            res.send(recetas)
        }).catch((err) => {
            res.status(500).send();
        }) ;        
    })

    app.patch('/recetas/:nombre', (req, res) => {
       RecetaControllerMYSQL.modificarCampoReceta(req.params.nombre, req.body.descripcion, req.body.cantidad, req.body.medida).then((recetas: Clase_sim) => {
            res.send(recetas)
        }).catch((err) => {
            res.status(500).send();
        });
    }) 
}