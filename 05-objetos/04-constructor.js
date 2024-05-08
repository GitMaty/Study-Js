// { id: 1, recuperar clave: function(){} }
function Usuario() {
    this.id = 1;
    this.recuperarClave = function () {  //  llamar método una función que fue asignada a una propiedad de un objeto
        console.log('recuperando clave...');
        }                                                //           usar UpperCamelCase
    
}
let Usuario = new Usuario();

console.log(Usuario);
