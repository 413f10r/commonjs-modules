/*
3 - people.js
1. Importa la tua funzione da names.js
2. Importa la tua funzione da hobbies.js
3. Crea una funzione che non ha parametri. 
La funzione dovrebbe restituire un oggetto con due proprietà:
 fullName ed hobbies. 
All'interno della tua funzione, usa le tue due funzioni precedenti 
per costruire l'oggetto.
*/

import newHobbie from './hobbie.js';
import newNames from './names.js';

const fullName = newNames('Leo', 'Messi');
const hobbies = newHobbie('Calcio', 'Futsal', 'FantaCalcio');


function newPeople() {

    return {
        fullName,
        hobbies
    };
}

console.log(newPeople());



