/*
Descripción: Conversión de un número decimal en fracción
Autor: Michael Niessen (© 2018)
Sito web: AssemblySys.com

Si este código le es útil, puede mostrar su
agradecimiento a Michaël ofreciéndole un café ;)
PayPal: https://www.paypal.me/MichaelNiessen

Mientras estos comentarios (incluyendo nombre y detalles del autor) estén
incluidos y SIN ALTERAR, este código se puede usar y distribuir libremente.
*/

function decimalToFraction(value, donly = true) {
    var tolerance = 1.0E-10; // a partir de cuantas decimales se hace el redondeo --> se puede modificar el -10 para numeros mas grandes
    var h1 = 1;
    var h2 = 0;
    var k1 = 0;
    var k2 = 1;
    var negative = false;
    var i;
  
    if (parseInt(value) == value) { // si el valor es un número entero, detener el código
      return value;
    } else if (value < 0) {
      negative = true;
      value = -value;
    }
  
    if (donly) {
      i = parseInt(value);
      value -= i;
    }
  
    var b = value;
  
    do {
      var a = Math.floor(b);
      //console.log(a)
      var aux = h1;
      h1 = a * h1 + h2;
      h2 = aux;
      aux = k1;
      k1 = a * k1 + k2;
      k2 = aux;
      b = 1 / (b - a);
    } while (Math.abs(value - h1 / k1) > value * tolerance);
  
    return (negative ? "-" : '') + ((donly & (i != 0)) ? i + ' ' : '') + (h1 == 0 ? '' : h1 + "/" + k1);
  }