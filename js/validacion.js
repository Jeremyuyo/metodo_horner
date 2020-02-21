//Función para validar el ingreso de números en un input
function solonumeros(e){
    key = e.keyCode || e.which;
    teclado = String.fromCharCode(key);
    numero = "0123456789-";
    especiales = "8-37-38-46";//array

    teclado_especial = false

    for (var i in especiales){
      if (key == especiales[i]) {
        teclado_especial = true;break;
      }
    }

    if(numero.indexOf(teclado)==-1 && !teclado_especial) {
      return false;
    }
}

//Esta funcion permite evaluar si un numero es entero o decimal (de acuerdo a eso lo redondea o no)
function entero(valor) {
  if (valor % 1 == 0) {
    //*toFixed(); --> convertirlo a entero o redondear a los decimales que necesitemos
      return valor.toFixed(0);
  } else {
      return valor.toFixed(3);
  }
}
