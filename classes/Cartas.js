export class Carta {
    numero
    naipe
    status

    constructor (numero, naipe, status) {
        this.naipe = naipe;
        this.numero = numero;
        this.status = status;
    }
}