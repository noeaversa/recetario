import { Clase_com } from "./classes/clase_com";
import { Clase_sim } from "./classes/clase_sim";
import express from 'express';
import * as Server from "./server"
import { Controller } from "./controllers/controller";
import * as dotenv from 'dotenv';

dotenv.config()

let controller : Controller = new Controller()

Server.start(9090, controller)