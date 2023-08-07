let nombredeusuario = prompt('ingrese su nombre').toLowerCase();
alert('bienvenido' + ' ' + nombredeusuario);

let desicion = prompt('¿desea recibir novedades sobre nosotros?');
if (desicion == 'si') {
  prompt('gracias por su respuersta, a partir de ahora recibira novedades sobre nosotros').toLowerCase();

}
else if (desicion == 'no') {
  alert('gracias por su respuesta, no recibira notificaciones sobre nosotros').toLowerCase();
}

let cursos = true;

while (cursos) {
  let respuesta = prompt('Bienvenido a Estudio Aled. ¿Desea comprar alguno de nuestros cursos?\n\n1. Si\n2. No');

  if (respuesta === '1') {
    let cursoelegido = prompt('Seleccione el curso que desea comprar\n\n1. microblading\n2. maquillaje semipermanente');
    if (cursoelegido === '1') {
      alert('Has elegido comprar microblading');
      cursos = false;
    } else if (cursoelegido === '2') {
      alert('Has elegido comprar maquillaje semipermanente');
      cursos = false;
    } else {
      alert('Curso no válido. Por favor, seleccione uno de los cursos disponibles.');
    }
  } else if (respuesta === '2') {
    cursos = false;
    alert('Gracias por visitarnos. ¡Hasta luego!');
  } else {
    alert('Opción no válida. Por favor, seleccione 1 o 2.');
  }
}


 



