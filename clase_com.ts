import { Clase_abs } from "./clase_abs";

export class Clase_com extends Clase_abs{
    private pasos: string[]
    
    constructor(){
        super()
        this.pasos = []
    }

    public getPasos(): string[] {
        return this.pasos;
    }

    public setPasos(pasos: string[]): void {
        this.pasos = pasos;
    }


}