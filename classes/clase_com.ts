import { Clase_abs } from "./clase_abs";
import { Medida } from "../medida"

export class Clase_com extends Clase_abs{
    private hijo: Clase_abs[]
    private pasos: string[]

    constructor(n: String, d: String, c: number, m: Medida, pasos: String[]){
        super(n, d, c, m)
        this.hijo = []
        this.pasos = []
    }

    public addHijo(hijoAgregar: Clase_abs){
        this.hijo.push(hijoAgregar)
    }

    public removeHijo(hijoRemover: Clase_abs){
        const index = this.hijo.indexOf(hijoRemover)
        this.hijo.splice(index, 1)
    }

    public getHijo(): Clase_abs[] {
        return this.hijo;
    }

    public getPasos(): string[] {
        return this.pasos;
    }

    public setPasos(pasos: string[]): void {
        this.pasos = pasos;
    }

    public contarPasos(): number {
        return this.pasos.length
    }

    public contarRecetas(): number {
        return this.hijo.length
    }

    /*
    public mostrarRecetaCompleta(): void {
        console.log("Nombre: ", this.getNombre())
        console.log("Descripcion: ", this.getDescripcion())
        console.log("Cantidad: ", this.getCantidad(), " ", this.devolverMedida())

            console.log("Ingredientes:")

            this.hijo.forEach(function(valor){
                console.log("Nombre: ", valor.getNombre())
                console.log("Descripcion: ", valor.getDescripcion())
                console.log("Cantidad: ", valor.getCantidad(), " ", valor.devolverMedida())
            })
        
        console.log(this.pasos)
    }
    */
}