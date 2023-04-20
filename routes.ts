import { Clase_com } from "./classes/clase_com";
import { Clase_sim } from "./classes/clase_sim";
import { Application } from "express"
import { Controller } from "./classes/controller";
import * as database_config from "./database/database_config";

import * as bodyParser from "body-parser";
import * as express from "express";
import { Clase_abs } from "./classes/clase_abs";
import { ControllerMySql } from "./classes/controllerMySQL";

const conexion = database_config.connection;

export const init = (app: Application, receta: Controller) => {
    app.get('/', (req, res) => {
        const query = 'SELECT * FROM receta';
        conexion.query(query, (err, results) => {
            if(err) {
                console.log('ERROR EN EL GET!')
            }

            const recetas = results.map((result: any) => {
                return new Clase_sim(result.nombre, result.descripcion, result.cantidad, result.medida)     
            })
            res.send(recetas)    
        })
            
    })

    /*
    app.get('/:nombre', (req, res) => {
        const nombre_param = req.params;
        const receta_get: Clase_sim  = new Clase_sim(req.body.nombre, req.body.descripcion, req.body.cantidad, req.body.medida);

        const consulta = 'update receta set descripcion = "' + receta_push.getDescripcion() + '", cantidad = ' + receta_push.getCantidad() + ', medida = "' + receta_push.getMedida() + '" where nombre = "' + receta_push.getNombre() + '"';
        
        conexion.query(consulta, (err, results) => {
            if(err)
                console.log("error en el put")
            else{
                res.send(receta_push)
            }
        })
    })
*/
    app.post('/', (req, res) => {
        const recetas: Clase_sim = new Clase_sim(req.body.nombre, req.body.descripcion, req.body.cantidad, req.body.medida);

        const valores_a_agregar = ["'" + recetas.getNombre() + "'", "'" + recetas.getDescripcion() + "'", recetas.getCantidad(), "'" + recetas.getMedida() + "'"]
        const consulta = 'Insert into receta (nombre, descripcion, cantidad, medida) values (' + valores_a_agregar + ")";  
        
        conexion.query(consulta,(err, results) => {
            if(err){
                console.log("ERROR EN EL POST!!!")
            }
            else{
                console.log("Todo ok en el post")
                res.send(recetas)
            } 
        })
    })

    app.delete('/:nombre', (req, res) => {
        const nombre_param = req.params.nombre;
        
        const consulta = 'delete from receta where nombre = "' + nombre_param + '"';
        conexion.query(consulta, (err, result) => {
            if(err)
                console.log("Error en el delete" + err)
            else
                res.send("Se elimino todo de: " + nombre_param)
        })
    })

    app.put('/:nombre', (req, res) => {
        const nombre_param = req.params.nombre;
        const receta_push: Clase_sim  = new Clase_sim(nombre_param, req.body.descripcion, req.body.cantidad, req.body.medida);

        const consulta = 'update receta set descripcion = "' + receta_push.getDescripcion() + '", cantidad = ' + receta_push.getCantidad() + ', medida = "' + receta_push.getMedida() + '" where nombre = "' + receta_push.getNombre() + '"';
        
        conexion.query(consulta, (err, results) => {
            if(err)
                console.log("error en el put")
            else{
                res.send(receta_push)
            }
        })
        
    })

    app.patch('/:nombre', (req, res) => {
        const nombre_param = req.params.nombre;
        const query_select = 'select * from receta where nombre = "' + nombre_param + '"';
        let receta_patch : Clase_sim = new Clase_sim("", "", 0, 0);

        conexion.query(query_select, (err, results) => {
            if(err)
                return res.status(402).send({err: 'Error con el select'})

            receta_patch = new Clase_sim(results.nombre, results.descripcion, results.cantidad, results.medida)
        })

        if(req.body.descripcion)
            receta_patch.setDescripcion(req.body.descripcion)
        
        if(req.body.cantidad)
            receta_patch.setDescripcion(req.body.cantidad)

        if(req.body.medida)
            receta_patch.setMedida(req.body.medida)
        
        conexion.query('update receta set ? where nombre = ?', [receta_patch, nombre_param], (err, results) => {
            if(err)
                console.log(err)
            else
                console.log("todo ok en pathch")
        })
    }) 
}