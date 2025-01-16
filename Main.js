import {Baralho} from './classes/Baralho.js';
import {Jogador} from './classes/Jogador.js';

function main() {
    
    let baralho = new Baralho();
	let jogadores = [4]

    jogadores[0] = new Jogador(baralho, "natan");
    //console.log(jogadores)
    jogadores[0].exibir();

    /*
    //console.log(baralho);
    for(let i=0; i<52; i++){
        console.log("_____________")
		console.log(baralho.sortear());
        console.log("_____________")
    }
        */
    

    
}

main();