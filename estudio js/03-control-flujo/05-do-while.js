// cuales son los números pares

let i = 0;

// while (i < 10) {
//     if (i % 2 == 0) {                                       // se evalúa primero la condición
//         console.log('numero par', i);
//     }
//     i++;


// }


do {
    if (i % 2 == 0) {
        console.log('numero par', i);                           // ejecuta y luego realiza la evaluación de la condición
    }
    i++;
} while (i < 2);