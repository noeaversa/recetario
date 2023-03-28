import { Medida } from "./medida";

export abstract class  Clase_abs {
    private nombre: String;
    private descripcion: String;
    private cantidad: number;
    private medida: Medida;

    constructor() {
        this.nombre = "Pizza a la Prusci"
        this.descripcion = "con Espinaca y Salsa Blanca"
        this.cantidad = 1
        this.medida = Medida.UNIDAD
    }


    public getNombre(): String {
        return this.nombre;
    }

    public setNombre(nombre: String): void {
        this.nombre = nombre;
    }

    public getDescripcion(): String {
        return this.descripcion;
    }

    public setDescripcion(descripcion: String): void {
        this.descripcion = descripcion;
    }

    public getCantidad(): number {
        return this.cantidad;
    }

    public setCantidad(cantidad: number): void {
        this.cantidad = cantidad;
    }

    public getMedida(): Medida {
        return this.medida;
    }

    public setMedida(medida: Medida): void {
        this.medida = medida;
    }


  

 

}