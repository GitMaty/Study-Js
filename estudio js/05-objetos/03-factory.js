function crearUsuario(name, email) {                         // usar camelCase
    return {
        email,
        name,
        activo: true,
        recuperarClave: function () {
            console.log('recuperando clave...');
        },
    };
};
let user1 = crearUsuario('matias', 'maty.inbox@outlook.com');
let user2 = crearUsuario('Felipe', 'feli.inbox@outlook.com');

console.log(user1, user2);