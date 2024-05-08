// crear algoritmo que devuelva el precio dle producto mas impuestos , no hace falta redondear el resultado


function precioCompleto(precio, impuesto) {
     return precio + precio * impuesto;

}


let resultado = precioCompleto(19.90, 0.15);
console.log(resultado);

