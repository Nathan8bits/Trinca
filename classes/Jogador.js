export class jogador {

    cartas = [10]

    constructor (baralho) {

        for(let i=0; i<9; i++) {
        	cartas[i] = baralho.sortear();

        }
    }
}