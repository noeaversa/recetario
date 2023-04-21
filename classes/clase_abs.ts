import { Medida } from "./medida";

export abstract class  Clase_abs {
    private nombre: string;
    private descripcion: string;
    private cantidad: number;
    private medida: Medida;


    constructor(n: string, d: string, c: number, m: Medida) {
        this.nombre = n
        this.descripcion = d
        this.cantidad = c
        this.medida = m
    }    


    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getDescripcion(): string {
        return this.descripcion;
    }

    public setDescripcion(descripcion: string): void {
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

    public convertirLitroAGramo(): void{
        if(this.getMedida() == 0){
            let pasaje: number = this.getCantidad() * 1000
            this.setCantidad(pasaje)
            this.setMedida(1)
        }
    }
}