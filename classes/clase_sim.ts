import { Clase_abs } from "./clase_abs";
import { Medida } from "./medida"

export class Clase_sim extends Clase_abs{
    constructor(n: String, d: String, c: number, m: Medida) {
        super(n, d, c, m)
    }

    /*
    public mostrarRecetaCompleta(): void {
        console.log("Nombre de la Receta: ", this.getNombre)
        console.log("Descripcion: ", this.getDescripcion)
        console.log("Cantidad: ", this.getCantidad, " ", this.devolverMedida())
    }*/

}