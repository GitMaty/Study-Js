function Usuario(nombre) {
    this.nombre = nombre;
}

console.log(Usuario.name);
console.log(Usuario.length);

const U = Usuario;
let user = new U('maty');

console.log(user);


function of(Fn, arg) {
    return new Fn(arg);
}
let user1 = of(Usuario, 'Matyu');
console.log(user1);


function returned() {
    return function () {
        console.log('hola mundo');
    }
}
let saludo = returned();
saludo();