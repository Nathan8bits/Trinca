import {Carta} from './Cartas.js'

export class Baralho {
    
    cartas
    cartasDisponiveis
    mesa

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

            switch (i%13) {

                case 11:
                    carta.numero = "J";
                    break;
                case 12:
                    carta.numero = "Q";
                    break;
                case 13: 
                	carta.numero = "K";
                    break;
                case 0:
                    carta.numero = "Ás";
                    break;
                default:
                    carta.numero = i%13;
                    break;
            }
            
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

        this.cartas[52] = new Carta("JOKER", "VERMELHO");
        this.cartas[53] = new Carta("JOKER", "PRETO");
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
