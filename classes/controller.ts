import { Clase_com } from "./clase_com";
import { Clase_sim } from "./clase_sim";

export class Controller{
    private recetas : Clase_com[]

      constructor(){
        this.recetas = []
    }

    public getHijos(): Clase_com[] {
        return this.recetas;
    }

    public setHijos(hijos: Clase_com[]): void {
        this.recetas = hijos;
    }

    public addHijo(hijoAgregar: Clase_com): void{
        this.recetas.push(hijoAgregar)
    }

    public verificarHijo(receta_verificar_nombre: string) : boolean{
        this.recetas.forEach(receta => {
            if(receta_verificar_nombre == receta.getNombre())
                return true
        });
        return false
    }

    public borrarElemento(receta: Clase_com): void{
        let index : number = this.recetas.indexOf(receta)
        this.recetas.splice(index, 1)
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