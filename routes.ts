import { Clase_com } from "./classes/clase_com";
import { Clase_sim } from "./classes/clase_sim";
import { Application } from "express"
import { Controller } from "./classes/controller";


export const init = (app: Application, receta: Controller) => {
    app.get('/', (req, res) => {
        res.send(receta)
    })

    app.get('/recetas/:nombre', (req, res) => {
        let receta_recibida = req.params
        if(receta.verificarHijo(receta_recibida.nombre)){
            console.log(receta_recibida)
        }
        else
            console.log("No se")
    })

    
    app.post('/', (req, res) => {
        receta.addHijo(req.body.receta)
        res.json(req.body.receta)
    })

    app.delete('/', (req, res) => {
        receta.borrarElemento(req.body.receta)
        res.send(receta)
    })
}