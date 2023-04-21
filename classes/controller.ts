import { Clase_abs } from "./clase_abs";
import { Clase_com } from "./clase_com";
export class Controller{
    private recetas : Clase_abs[]
    
    constructor(){
        this.recetas = []
    }

    public getRecetas(): Clase_abs[] {
        return this.recetas;
    }

    public getRecetasPorNombre(nombre : String): Clase_abs | null {
   
        let receta_a_cambiar = this.recetas.find(receta_a_cambiar => {
            return receta_a_cambiar.getNombre() == nombre
        })
        if (receta_a_cambiar)
            return receta_a_cambiar
        return null;
    }

    public setRecetas(receta: Clase_abs[]): void {
        this.recetas = receta;
    }

    public addHijo(hijoAgregar: Clase_abs): void{
        this.recetas.push(hijoAgregar)
    }

    public borrarElemento(receta: Clase_abs): void{
        let index : number = this.recetas.indexOf(receta)
        this.recetas.splice(index, 1)
    }

    public modificarElemento(receta_cambiada: Clase_abs) : void {
        let receta_a_cambiar = this.recetas.find(receta_a_cambiar => {
            return receta_a_cambiar.getNombre() == receta_cambiada.getNombre()
        })
        if (receta_a_cambiar){
            let index : number = this.recetas.indexOf(receta_a_cambiar)
            this.recetas[index] = receta_a_cambiar
        }

    }

    /*
    public mostrarHijo(nombre: string): Clase_com{
        receta_a_retornar : Clase_com;    
        this.recetas.find((el) => {
            if (el = "hola")
      
        })
    }
    */
}