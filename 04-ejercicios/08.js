//crear algoritmo que tome un array de objetos y devuelva un array de pares

let array = [{
    id: 1,
    name: 'Matias',
}, {
    id: 2,
    name: 'Fede',
}, {
    id: 3,
    name: 'Jere',
    }];

let pares = [
    [1, { id: 1, name: "Matias" }],
    [2, { id: 2, name: "Fede" }],
    [3, { id: 3, name: "Jere"}],    

];

function toPairs(arr) {
    let pairs = [];
    for (idx in arr) {
        let elemento = arr[idx];
        pairs[idx] = [elemento.id, elemento];
    }
    
    return pairs;
}
    
let resultado = toPairs(array);
console.log(resultado);