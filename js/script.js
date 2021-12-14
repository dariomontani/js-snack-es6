// Consegna:
// Scrivere una funzione(e lanciarla : razzo: ) che accetti tre argomenti, un array e due numeri(a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.



function myFunction(array, numA, numB) {
    const newArray = [];
    array.forEach(element => {
        if (element > numA && element < numB) {
            newArray.push(element);
        }
    });
    // ho un array con dei numeri
    // questi numeri devono esseri compresi tra il numero a e il numero b
    return newArray
}

const numbers = myFunction([6, 45, 5132, 2, 123, 654, 54, 7], 20, 500);
console.log(numbers);