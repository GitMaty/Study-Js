let user = {
    id: 1,
    name: 'matsu',
    age: 29,
};

for (let prop in user) {
    console.log(prop, user['age']);
}


// se puede usar esto pero mejor usar for of


let animales = ['chancho', 'dragon', 'perro'];
for (let indice in animales) {
    console.log(indice, animales[indice]);             // para acceder elementos de un array mejor utilizar for of
    
}