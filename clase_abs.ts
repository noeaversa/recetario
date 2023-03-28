import { Medida } from "./medida";

export abstract class  Clase_abs {
    nombre: String
    descripcion: String
    cantidad: number
    medida: Medida

    constructor() {
        this.nombre = "Pizza a la Prusci"
        this.descripcion = "con Espinaca y Salsa Blanca"
        this.cantidad = 1
        this.medida = Medida.UNIDAD
    }
}