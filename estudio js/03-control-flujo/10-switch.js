let accion = 'actualizar';

switch (accion) {
    case 'listar':
        console.log('acción de listar');
        break;                                  // colocar siempre el break
    case 'guardar':
        console.log('acción de guardar');
        break;
    default:
        console.log('acción no reconocida');
}

