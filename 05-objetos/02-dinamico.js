const user = { id: 1 };

user.name = 'Matias';
user.guardar = function () {
    console.log('Guardando', user.name);
}

user.guardar();

delete user.name;                      // cunado definimos una variable con const no podemos cambiarle el valor, 
delete user.guardar;                   // pero si es un objeto, si podemos cambiarle el valor a las propiedades
console.log(user);    


const user1 = Object.freeze({ id: 1 });//  freeze - no se puede modificar un objeto que fue creado
const user3 = Object.seal({ id: 1 });  //  seal   - cambiar valores que ya tiene, pero no agregar y quitar propiedades
user1.name = 'Maty';
user1.id = 2;
console.log(user1);