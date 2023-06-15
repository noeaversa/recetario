import { Clase_com } from "./classes/clase_com";
import { Clase_sim } from "./classes/clase_sim";
import { Application } from "express"
import { Controller } from "./controllers/controller";
import * as database_config from "./database/database_config";

import * as express from "express";
import { Clase_abs } from "./classes/clase_abs";
import { RecetaControllerMYSQL } from "./controllers/RecetaMysql";
import { userController } from "./controllers/userController";

const conexion = database_config.connection;

export const init = (app: Application, recetaControllerMYSQL: RecetaControllerMYSQL) => {
    app.post('/recetas/registro', (req, res) => {
        userController.registroUser(req.body.nombre, req.body.contraseña).then((user) => {
            res.send(user);
        }).catch((err) => {
            res.status(500).send();
        });
    });

    app.post("/recetas/ingreso", (req, res) => {
        userController.ingresoUser(req.body.nombre, req.body.contraseña).then((user) => {
            res.send(user)
        }).catch((err) => {
            res.status(500)
            res.send(err)
        })
    })
    
    app.get('/recetas', userController.verifyToken,(req, res) => {
        RecetaControllerMYSQL.obtenerTodasLasRecetas().then((recetas: Clase_com) => {
            res.send(recetas)
        }).catch((err) => {
            res.status(500).send();
        })      
    })

    app.get('/recetas/buscarLetra/:letra',  userController.verifyToken,(req, res) => {
        RecetaControllerMYSQL.obtenerRecetaPorLetra(req.params.letra).then((recetas) => {
            res.send(recetas)
        }).catch((err) => {
            res.status(500).send();
        })      
    });

    app.get('/recetas/:nombre', userController.verifyToken, (req, res) => {
        RecetaControllerMYSQL.obtenerRecetaEspecifica(req.params.nombre).then((recetas: Clase_sim) => {
            res.send(recetas)
        }).catch((err) => {
            res.status(500).send();
        }) 
    })

    app.post('/recetas', userController.verifyToken, (req, res) => {
        RecetaControllerMYSQL.agregarNuevaReceta(req.body.nombre, req.body.descripcion, req.body.cantidad, req.body.medida).then((recetas: Clase_sim) => {
            res.send(recetas)
        }).catch((err) => {
            res.status(500).send();
        }) 
    })

    app.delete('/recetas/:nombre', userController.verifyToken, (req, res) => {
        RecetaControllerMYSQL.eliminarReceta(req.params.nombre).then((result: any) => {
            if(!result){
                res.status(404).send();
            }
            else{
                res.send(result)
            }
        }).catch((err) => {
            res.status(500).send();
        }) 
    })

    app.put('/recetas/:nombre', userController.verifyToken, (req, res) => {
        RecetaControllerMYSQL.modificarRecetaCompleta(req.params.nombre, req.body.descripcion, req.body.cantidad, req.body.medida).then((recetas: Clase_sim) => {
            res.send(recetas)
        }).catch((err) => {
            res.status(500).send();
        }) ;        
    })

    app.patch('/recetas/:nombre', userController.verifyToken, (req, res) => {
       RecetaControllerMYSQL.modificarCampoReceta(req.params.nombre, req.body.descripcion, req.body.cantidad, req.body.medida).then((recetas: Clase_sim) => {
            res.send(recetas)
        }).catch((err) => {
            res.status(500).send();
        });
    }) 
}