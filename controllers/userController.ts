import { Usuario } from "../classes/usuario";
import * as bcrypt from "bcrypt";
import { connection } from "../database/database_config";

export class userController {
    async verificarContraseña(nombre_usuario: string, contraseña: string): Promise<boolean>{
        const contraseña_ingresada = await bcrypt.hash(contraseña, 20);  
        const usuario = await this.obtenerUser(nombre_usuario);
        const coinciden_contraseñas = await bcrypt.compare(contraseña, usuario.getContraseña());
        return(coinciden_contraseñas)
    }

    obtenerUser(nombre_usuario: string): Promise<Usuario>{
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
}