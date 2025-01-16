import {Baralho} from './classes/Baralho.js'

function main() {
    
    let baralho = new Baralho();
    //console.log(baralho);
    for(let i=0; i<52; i++){
        console.log("_____________")
		console.log(baralho.sortear());
        console.log("_____________")
    }
    

    
}

main();