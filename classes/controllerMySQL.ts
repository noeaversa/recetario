import { Clase_abs } from "./clase_abs";
import * as database_config from "../database/database_config"
import { Connection } from "mysql";
import { Medida } from "./medida";

export class ControllerMySql {
        database: Connection;

        constructor(){
            this.database = database_config.connection
        }
/*
      async actualizar(nombre: string, descripcion: string, cantidad: number, medida: Medida): Promise <Clase_abs> {
        const sql = 'UPDATE receta SET descripcion = ?, cantidad = ?, medida = ? WHERE nombre = ?';
        const params = [nombre, descripcion, cantidad, medida];

        try {
            await  this.database.promisify(this.database.query).bind(this.database)(sql, params);
            return new Receta(id, nombre, descripcion, cantidad, medida);
          } catch (error) {
            console.error(error);
            throw new Error('Error al actualizar la receta');
          }
        }
      }
*/
    }


