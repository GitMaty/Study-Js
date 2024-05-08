// break permite salir del loop
// continue permite saltarnos una iteración

let i = 0;
while (i < 6) {
    i++;
    if (i === 2) {
        continue;                             // se puede utilizar para for, for in, for of, do while
    }
    if (i === 4) {
        break;
    }
    console.log(i);
}
