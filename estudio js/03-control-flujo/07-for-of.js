// while
// do while            // calcular como vamos a realizar una iteración
// for


let animales = ['chanchito', 'dragon', 'perrito'];

for (let animal of animales) {                                    // iterar un listado de elementos  con for of
    console.log(animal);
}

let i = 0;                            // 0  = 1er elemento  1 = 2do, etc
while (i < animales.length) {
    console.log(animales[i]);
    i++;                                            // aumentar el numero para que no se genere el loop infinito
}