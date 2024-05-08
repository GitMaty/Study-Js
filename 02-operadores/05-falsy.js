// short-circuit

// false
// 0
// ''                                  // falsy
// null
// undefined
// NaN

let nombre = 'Matsu';
let username = nombre || 'anónimo';
console.log(username);

function fn1() {
    console.log('soy función 1');
    return false;
}

function fn2() {
    console.log('soy función 2');
    return true;
}
let x = fn1() && fn2();
