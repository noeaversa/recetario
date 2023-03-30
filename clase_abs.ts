import { Medida } from "./medida";

export abstract class  Clase_abs {
    private nombre: String;
    private descripcion: String;
    private cantidad: number;
    private medida: Medida;


    constructor(n: String, d: String, c: number, m: Medida) {
        this.nombre = n
        this.descripcion = d
        this.cantidad = c
        this.medida = m
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


    public devolverMedida(): String {
        if(this.getMedida() == 0)
            return "LITRO"
        else if (this.getMedida() == 1)
            return "GRAMO"
        else 
            return "UNIDAD"
    }

    //public abstract mostrarRecetaCompleta(): void;
}