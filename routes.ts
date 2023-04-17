import { Clase_com } from "./classes/clase_com";
import { Clase_sim } from "./classes/clase_sim";
import { Application } from "express"
import { Controller } from "./classes/controller";
import * as database_config from "./database/database_config";

import * as bodyParser from "body-parser";
import * as express from "express";
import { Clase_abs } from "./classes/clase_abs";
import { resolveModuleNameFromCache } from "typescript";

const conexion = database_config.connection;
export const init = (app: Application, receta: Controller) => {
    app.get('/', (req, res) => {
        const query = 'SELECT * FROM receta';
        conexion.query(query, (err, results) => {
            if(err) {
                console.log('ERROR EN EL GET!')
            }

            const recetas = results.map((result: any) => {
                const queryComprobarQueEs = 'SELECT * FROM receta where ' + result.nombre + ' = nombre1';
                if(err){
                    return new Clase_sim(result.nombre, result.descripcion, result.cantidad, result.medida)     
                } 
                else {
                    return new Clase_com(result.nombre, result.descripcion, result.cantidad, result.medida, [])
                }
            })
            res.send(recetas)    
        })
            
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