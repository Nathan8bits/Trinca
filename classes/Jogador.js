export class Jogador {

    cartas = [10]
    nome

    constructor (baralho, nome) {

        this.nome = nome;

        for(let i=0; i<9; i++) {
        	this.cartas[i] = baralho.sortear();

        }
    }

    exibir(){
        console.log(this.nome);
        this.cartas.forEach(carta => {
            console.log(carta);
        });
    }
}