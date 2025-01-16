import {Carta} from './Cartas.js'

export class Baralho {
    
    cartas
    cartasDisponives

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
        this.cartasDisponives = Array.from(this.cartas);
    }
}
