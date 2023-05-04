export class Usuario{
    private usuario: string;
    private contraseñaHasheada: string;

    constructor(u, c){
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
