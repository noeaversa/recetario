import { Clase_com } from "./classes/clase_com";
import { Clase_sim } from "./classes/clase_sim";
import express from 'express';
import * as Server from "./server"
import { Controller } from "./classes/controller";

let controller : Controller = new Controller()
const agua: Clase_sim = new Clase_sim("agua", "-", 500, 0)
controller.addHijo(agua)
const harina: Clase_sim = new Clase_sim("harina", "-", 500, 1)
const sal: Clase_sim = new Clase_sim("sal", "-", 1, 1)

const masa: Clase_com = new Clase_com("masa", " de pizza", 1, 2, [])
masa.addHijo(agua)
masa.addHijo(harina)
masa.addHijo(sal)
controller.addHijo(masa)

const pizza_a_la_prusci: Clase_com = new Clase_com("Pizza a la Prusci", "con Salsa Blanca y Espinaca", 1, 2, [])
pizza_a_la_prusci.addHijo(masa)

controller.addHijo(pizza_a_la_prusci)

Server.start(9090, controller)