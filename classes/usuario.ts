export class Usuario{
    private usuario: any;
    private contraseñaHasheada: any;

    constructor(u:any, c:any){
        this.usuario = u;
        this.contraseñaHasheada = c;
    }

    public getUsuario(): string {
        return this.usuario;
    }

    public setUsuario(usuario: string): void {
        this.usuario = usuario;
    }

    public getContraseña(): string {
        return this.contraseñaHasheada;
    }

    public setContraseña(contraseña: string): void {
        this.contraseñaHasheada = contraseña;
    }

}
