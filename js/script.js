// Consegna:
// Scrivere una funzione(e lanciarla : razzo: ) che accetti tre argomenti, un array e due numeri(a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

let arrayNomi = ['Mario', 'Lucia', 'Filippo', 'Michael', 'Martina', 'Laura', 'Francesca', 'Federico'];

let a = 3;
let b = 7;

function myFunction(array, numA, numB) {
    const newArray = [];
    array.forEach((element, i) => {
        if (i > numA && i < numB) {
            newArray.push(element);
        }
    });
    return newArray
}

const numbers = myFunction(arrayNomi, a, b);
console.log(numbers);