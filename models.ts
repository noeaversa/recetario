import { Clase_com } from "./classes/clase_com";
import { connection } from "./database/database_config";

export class RecetaModel {
    public static getAll():Promise<Clase_com> {
        return new Promise((resolve, reject) => {
            connection.query(
                "SELECT * FROM recetas",
                [],
                (err, res) => {
                    if (err) reject(err);
                }
            );
        });
    }
}