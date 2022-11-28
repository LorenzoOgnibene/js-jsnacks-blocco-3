/**
 * Crea due array che hanno un numero di elementi diversi. 
 * Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.
 */

const fruitList = ['banane', 'mele', 'fragole', 'kiwi', 'uva', 'anguria'];
const vegetableList = ['carote', 'insalata', 'zucchine'];

while(fruitList.length !== vegetableList.length){
    if (fruitList.length < vegetableList.length){
        fruitList.push(prompt('inserisci frutta nel carrello'))
    }else if (vegetableList.length < fruitList.length){
        vegetableList.push(prompt('inserisci verdure nel carrello'))
    }
}

console.log(fruitList);
console.log(vegetableList);