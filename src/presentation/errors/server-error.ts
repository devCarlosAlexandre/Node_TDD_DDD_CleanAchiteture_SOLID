export class ServerError extends Error {
    constructor() {
        super("Error interno no servidor")
        this.name = 'ServerError'
    }
}