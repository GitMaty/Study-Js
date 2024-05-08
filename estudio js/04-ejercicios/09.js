// crear algoritmo que devuleva un array de objetos en base a pares

let pairs = [
    [1, { name: "matias" }],
    [2, { name: "fede" }],
    [3, { name: "jere" }],
];

let array = [{
    id: 1,
    name: 'matias',
},
{
    id: 2,
    name: 'fede',
},
{
    id: 3,   
    name: 'jere',
},];

function toCollection(arr) {
    let collection = [];
    for (idx in arr) {
        let elemento = arr[idx];
        collection[idx] = elemento[1];
        collection[idx].id = elemento[0];
    }
    
    return collection;
}

let resultado = toCollection(pairs);
console.log(resultado);