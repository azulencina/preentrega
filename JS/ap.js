let nombredeusuario = prompt('ingrese su nombre').toLowerCase();
alert('bienvenido' + ' ' + nombredeusuario);

let desicion = prompt('¿desea recibir novedades sobre nosotros?');
if (desicion == 'si') {
  prompt('gracias por su respuersta, a partir de ahora recibira novedades sobre nosotros').toLowerCase();

}
else if (desicion == 'no') {
  alert('gracias por su respuesta, no recibira notificaciones sobre nosotros').toLowerCase();
}

let respuesta = prompt('Bienvenido a Estudio Aled. ¿Desea comprar alguno de nuestros cursos?\n 1.SI. \n 2.No');
while (respuesta != 'No') {

    if (respuesta === '1') {
        let cursoelegido = prompt('Seleccione el curso que desea comprar\n\n1. microblading\n2. maquillaje semipermanente');
        if (cursoelegido === '1') {
            alert('Has elegido comprar microblading');
        } else if (cursoelegido === '2') {
            alert('Has elegido comprar maquillaje semipermanente');
        } else {
            alert('Curso no válido. Por favor, seleccione uno de los cursos disponibles.');
        }
    } 
     respuesta = prompt('¿Desea comprar otro de nuestros cursos?\n 1.SI. \n 2.No ');}


if (cursos == '1') {
    alert('redirigir')
}
else if (cursos == '2') {
    alert('gracias por su compra');
}
 



