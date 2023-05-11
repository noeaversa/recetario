import { Usuario } from "../classes/usuario";
import * as bcrypt from "bcrypt";
import { connection } from "../database/database_config";
import { BooleanLiteral } from "typescript";
import jwt from "jsonwebtoken";
import { Parameter } from "swagger-jsdoc";

export class userController {
    public static verificarUsuario(nombre_usuario: string, contraseña: string): Promise<boolean>{
        return new Promise((resolve, reject) => {
            this.obtenerUser(nombre_usuario).then((user) => {
                resolve(bcrypt.compare(contraseña, user.getContraseña()))
            }).catch((err) =>{
                reject(err)                
            })      
        })
    }

    public static obtenerUser(nombre_usuario: string): Promise<Usuario>{
        return new Promise((resolve, reject) => {
            const consulta = 'SELECT * FROM usuario where nombre_usuario = "' + nombre_usuario + '"';
            connection.query(consulta, (err, results) => {
                if(err)
                    reject(err)
                else{
                    const usuarioObtenido: Usuario = new Usuario(results[0].nombre_usuario, results[0].contraseña)
                    resolve(usuarioObtenido);
                }
            })
        })
    }

    public static agregarUsuarioDatabase(nombre: string, contraseña: any): Promise<string>{
        return new Promise((resolve, reject) => {
            let valores_a_agregar = ["'" + nombre + "'", "'" + contraseña + "'"];
            const consulta = 'insert into usuario (nombre_usuario, contraseña) values (' + valores_a_agregar + ')';
            connection.query(consulta, (err, results) => {
                if(err){
                    reject(err);
                }else{
                    resolve(nombre); //con esto ves si se posteo todo ok
                }
            }); 
        })
    }

    public static registroUser(nombre_usuario:string, contraseña_usuario: string): Promise<string>{
        return new Promise((resolve, reject) => {
            bcrypt.hash(contraseña_usuario, 1).then((contraseña_hasheada)=>{
                resolve(this.agregarUsuarioDatabase(nombre_usuario, contraseña_hasheada))
            }).catch((err) =>{
                reject(err)
            });
        })
    } 

    public static ingresoUser(nombre_usuario: string, contraseña_ingresada: string): Promise<{ nombre_usuario: string, token: string }> {
        return new Promise((resolve, reject) => {
            this.verificarUsuario(nombre_usuario, contraseña_ingresada).then((booleano) => {
                if (!booleano)
                    reject("no es correcta la contraseña");
                else {
                    this.obtenerUser(nombre_usuario).then((usuario) => {
                        const token = jwt.sign({ nombre_usuario }, 'secret_key');
                        resolve({ nombre_usuario, token });
                    }).catch((err) => {
                        reject(err);
                    })
                }
            }).catch((err) => {
                reject(err);
            })
        })
    }
    
    public static verifyToken(req: any, res: any, next: any): Promise<any> {
        return new Promise((resolve, results) => { 
            const token_user = req.header('Authorization').replace('Bearer ', '');
            try{
                const decoded = jwt.verify(token_user, 'secret_key');
            }
            catch(err){
                res.status(404).send();
            }
            return next();
        })
    }
}
