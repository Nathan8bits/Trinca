import {Carta} from './Cartas.js'

export class Baralho {
    
    cartas
    cartasDisponiveis

    constructor () {
        this.preencherBaralho();
        this.copiarBaralho();
    }

    preencherBaralho(){
        // Adiciona uma nova linha preenchida com o valorInicial
        const linha = Array(54).fill("#");
        this.cartas = linha;
        //this.cartas.push(linha);

        for(let i=0; i < 52; i++) {
            let carta = new Carta();
            carta.numero = i%13;

            switch (i%4) {
                case 0:
                    carta.naipe = "ouros";
                    break;
                    
                case 1:
                    carta.naipe = "paus";
                    break;
                case 2: 
                    carta.naipe = "espada";
                    break;
                
                case 3:
                    carta.naipe = "copas";
                
                default:
                    break;
            }

            this.cartas[i] = carta;
        }
    }

    copiarBaralho() {
        //fazer uma copia de vetores
        this.cartasDisponiveis = Array.from(this.cartas);
    }

    sortear(){
		//console.log(this.cartasDisponiveis);

    	let limite = this.cartasDisponiveis.length;
		console.log("cartas disponiveis: " + limite);

		let n = parseInt(Math.random() * (limite - 0) + 0);
        console.log("numero sorteado: "+n);

        let sorteada = this.cartasDisponiveis[n];
        //console.log(sorteada);

        this.cartasDisponiveis.splice(n, 1);

        return sorteada;
    }
}
