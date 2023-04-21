import { Clase_abs } from "./clase_abs";
import { Medida } from "./medida"

export class Clase_com extends Clase_abs{
    private hijo: Clase_abs[]
    private pasos: string[]

    constructor(n: string, d: string, c: number, m: Medida, pasos: String[]){
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

    public listarRecetasLetraEspecificaEnID(letra_contenida: string): Clase_abs[] {
        let lista: Clase_abs[] = []
        this.hijo.forEach(hijo => {
            if(hijo.getNombre().includes(letra_contenida)){
                lista.push(hijo)
            }
        });

        return lista
    }

    
}