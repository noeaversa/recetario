import { Clase_com } from "../classes/clase_com";
import { Clase_sim } from "../classes/clase_sim";
import { Medida } from "../classes/medida";
import { Usuario } from "../classes/usuario";
import { connection } from "../database/database_config";

export class RecetaControllerMYSQL {
    public static obtenerTodasLasRecetas():Promise<Clase_com> {
        return new Promise((resolve, reject) => {
           const consulta = 'Select * from receta';
           connection.query(consulta, (err, results) => {
                if(err)
                    reject(err)
                else{
                    const recetas = results.map((result : any) => {
                        return new Clase_sim(result.nombre, result.descripcion, result.cantidad, result.medida);
                    });
                    resolve(recetas)
                }
           });
        });
    }

    public static obtenerRecetaEspecifica(nombre: string): Promise<Clase_sim> {
        return new Promise((resolve, reject) => {
            const consulta = 'select * from receta where nombre = "' + nombre + '"';
            connection.query(consulta, (err, results) => {
                if(err)
                    reject(err)
                else{
                    const recetaObtenida = results
                    resolve(recetaObtenida);
                }
            })
        })
    }

    public static agregarNuevaReceta(nombre: string, descripcion: string, cantidad: number, medida: Medida): Promise<Clase_sim>{
        return new Promise((resolve, reject) => {
            let valores_a_agregar = ["'" + nombre + "'", "'" + descripcion + "'", cantidad, "'" + medida + "'"];
            const consulta = 'insert into receta (nombre, descripcion, cantidad, medida) values (' + valores_a_agregar + ')';
            connection.query(consulta, (err, results) => {
                if(err){
                    reject(err);
                }
                    
                else{
                    resolve(this.obtenerRecetaEspecifica(nombre)); //con esto ves si se posteo todo ok
                }
            }); 
        })
    }

    public static eliminarReceta(nombre: string): Promise<any>{
        return new Promise((resolve, reject) => {
            const consulta = 'delete from receta where nombre = "' + nombre + '"';

            connection.query(consulta, (err, results) => {
                if(err){
                    reject(err)
                }
                else{
                    if(results.affectedRows == 0){
                        resolve(false)
                    } else{   
                        resolve(true)
                    } // sirve para ver si se elimino bien, osea que no tendria que aparecer aca :)
                }
            })
        })
    }

    public static modificarRecetaCompleta(nombre: string, descripcion: string, cantidad: number, medida: Medida): Promise<Clase_sim> {
        return new Promise((resolve, reject) => {
            const consulta = 'update receta set descripcion = "' + descripcion + '", cantidad = ' + cantidad + ', medida = "' + medida + '" where nombre = "' + nombre + '"';

            connection.query(consulta, (err, results) => {
                if(err)
                    reject(err);
                else{
                    resolve(this.obtenerRecetaEspecifica(nombre));
                }
            })
        })
    }

    public static modificarCampoReceta(nombre: string, descripcion: string, cantidad: number, medida: Medida): Promise <Clase_sim> {
        return new Promise((resolve, reject) => {
            this.obtenerRecetaEspecifica(nombre).then((receta) => {
                if(descripcion != null && descripcion != undefined && descripcion != "")
                    receta.setDescripcion(descripcion)
                if(cantidad != undefined && cantidad != 0 && cantidad != null)
                    receta.setCantidad(cantidad)
                if(medida != null && medida != undefined)
                    receta.setMedida(medida)
                this.modificarRecetaCompleta(receta.getNombre(), receta.getDescripcion(), receta.getCantidad(), receta.getMedida());
            }).catch((err) => {
                reject(err)
            })

            resolve(this.obtenerRecetaEspecifica(nombre))    
        })
    }
}