// crear algoritmo que devuelva el numero menor y el mayor de uin array.

let array = [2, 5, 7, 15, -5, -100, 55];

function getMenorMayor(arr) {
    let menor = arr[0];
    let mayor = arr[0];
    for (numero of arr) { 
        menor = menor < numero ? menor : numero;          // remplazar valores
        mayor = mayor > numero ? mayor : numero;
    }
    return [menor, mayor];
}



let numeros = getMenorMayor(array);
console.log(numeros);



//suele ser prueba de entrevista tecnica