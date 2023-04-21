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
        const recetas = RecetaControllerMYSQL.obtenerTodasLasRecetas();
        res.send(recetas)        
    })

    app.get('/recetas/:nombre', (req, res) => {
        const receta = RecetaControllerMYSQL.obtenerRecetaEspecifica(req.params.nombre)
    })

    app.post('/recetas', (req, res) => {
        const receta_agregada = RecetaControllerMYSQL.agregarNuevaReceta(req.body.nombre, req.body.descripcion, req.body.cantidad, req.body.medida);
        res.send(receta_agregada)
    })

    app.delete('/recetas/:nombre', (req, res) => {
        const receta_eliminada = RecetaControllerMYSQL.eliminarReceta(req.params.nombre)
        res.send(receta_eliminada)
    })

    app.put('/recetas/:nombre', (req, res) => {
        const receta_modificada = RecetaControllerMYSQL.modificarRecetaCompleta(req.params.nombre, req.body.descripcion, req.body.cantidad, req.body.medida);
        res.send(receta_modificada)
        
    })

    app.patch('/recetas/:nombre', (req, res) => {
       let receta_modificada = RecetaControllerMYSQL.modificarCampoReceta(req.params.nombre, req.body.descripcion, req.body.cantidad, req.body.medida);
       res.send(receta_modificada)
    }) 
}