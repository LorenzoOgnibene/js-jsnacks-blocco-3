/**
 * Crea due tag div con due id diversi.
 * Un div avrà il testo colorato di rosso mentre l'altro di verde.
 * Partendo da un array di numeri,
 * creiamo un nuovo elemento p e lo stampiamo nell'div rosso  se è un numero dispari
 * e nel div verde se è un numero pari.
 *
 *
 */
// funzione che crei un nuovo elemento <p> </p>
// restituirlo a chi invoca la funzione
//
// ciclo per ogni elemento dell'array
// se l'elemento è un numero pari, crei nuovo elemento e lo aggiungo al div verde
// se l'elemento è un numero dispari, creo  nuovo elemento e lo aggiungo al div rosso



function addElement(content){
    const newPElement = document.createElement('p');
    newPElement.innerText = content;
    return newPElement;
}

const array = [1, 33, 55, 64, 33, 22, 10, 44];
const redDiv = document.getElementById('red');
const greenDiv = document.getElementById('green');

for(i = 0; i < array.length; i++){
    if(array[i] % 2 === 0){
        greenDiv.append(addElement(array[i]));
    }else{
        redDiv.append(addElement(array[i]));
    }
}