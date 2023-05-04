import { Usuario } from "../classes/usuario";
import * as bcrypt from "bcrypt";
import { connection } from "../database/database_config";

export class userController {
    async verificarContraseña(nombre_usuario: string, contraseña: string): Promise<boolean>{
        const contraseña_ingresada = await bcrypt.hash(contraseña, 20);  
        const usuario = await userController.obtenerUser(nombre_usuario);
        const coinciden_contraseñas = await bcrypt.compare(contraseña_ingresada, usuario.getContraseña());
        return(coinciden_contraseñas)
    }

    public static obtenerUser(nombre_usuario: string): Promise<Usuario>{
        return new Promise((resolve, reject) => {
            const consulta = 'SELECT * FROM usuario where nombre_usuario = "' + nombre_usuario + '"';
            connection.query(consulta, (err, results) => {
                if(err)
                    reject(err)
                else{
                    const usuarioObtenido = results
                    resolve(usuarioObtenido);
                }
            })
        })
    }
    public static agregarUsuarioDatabase(nombre: string, contraseña: string): Promise<Usuario>{
        return new Promise((resolve, reject) => {
            let valores_a_agregar = ["'" + nombre + "'", "'" + contraseña + "'"];
            const consulta = 'insert into usuario (nombre_usuario, contraseña) values (' + valores_a_agregar + ')';
            connection.query(consulta, (err, results) => {
                if(err){
                    reject(err);
                }
                else{
                    resolve(userController.obtenerUser(nombre)); //con esto ves si se posteo todo ok
                }
            }); 
        })
    }

    public static registroUser(nombre_usuario, contraseña_usuario): Promise<Usuario>{
        return new Promise((resolve, reject) => {
            const contraseña_hasheada = bcrypt.hash(contraseña_usuario, 20);
            this.agregarUsuarioDatabase(nombre_usuario, contraseña_usuario).then()
        })
    } 
}
