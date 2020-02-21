var Capturar = function () {
    //Se define y se captura las elementos del HTML que tenga la clase "numero" y "numero_" en un array
    let lstNumero = document.getElementsByClassName("numero"),
        arrayGuardar = [];
    let lstNumber = document.getElementsByClassName("numero_"),
        arrayGuardar1 = [];

    //Primer Polinomio
    for (var i = 0; i < lstNumero.length; i++) {
        arrayGuardar[i] = lstNumero[i].value;
        console.log(lstNumero[i].value);
        //Mostrar los indices del primer polinomio
        document.getElementById("n2x5").innerHTML = arrayGuardar[0];
        document.getElementById("n3x5").innerHTML = arrayGuardar[1];
        document.getElementById("n4x5").innerHTML = arrayGuardar[2];
        document.getElementById("n5x5").innerHTML = arrayGuardar[3];
        document.getElementById("n6x5").innerHTML = arrayGuardar[4];
        document.getElementById("n7x5").innerHTML = arrayGuardar[5];
    }

    //Segundo Polinomio
    for (var i = 0; i < lstNumber.length; i++) {
        arrayGuardar1[i] = lstNumber[i].value;
        console.log(lstNumber[i].value);
        //Mostrar los indices del segundo polinomio
        document.getElementById("n1x5").innerHTML = arrayGuardar1[0];
        document.getElementById("n8x5").innerHTML = -1 * (arrayGuardar1[1]);
        document.getElementById("n15x5").innerHTML = -1 * (arrayGuardar1[2]);
        document.getElementById("n22x5").innerHTML = -1 * (arrayGuardar1[3]);
    }

    //Se almacena los indices del segundo polinomio
    var primerValor = parseFloat(arrayGuardar1[0]);
    var segundoValor = -1 * parseFloat(arrayGuardar1[1]);
    var tercerValor = -1 * parseFloat(arrayGuardar1[2]);
    var cuartoValor = -1 * parseFloat(arrayGuardar1[3]);

    //---PRIMER RESULTADO
    var r = parseFloat(arrayGuardar[0]) / primerValor;
    document.getElementById("n30x5").innerHTML = entero(r); //*Función entero para verificar si es entero (sin decimales) o fraccion (con 3 decimales) 

        //Primera multiplicacion
        first_multi = parseFloat(r) * segundoValor;
        document.getElementById("n10x5").innerHTML = entero(first_multi);

        //Segunda multiplicacion
        second_multi = parseFloat(r) * tercerValor;
        document.getElementById("n11x5").innerHTML = entero(second_multi);

        //Tercera multiplicacion
        third_multi = parseFloat(r) * cuartoValor;
        document.getElementById("n12x5").innerHTML = entero(third_multi);

    //---SEGUNDO RESULTADO
    var r1 = (parseFloat(arrayGuardar[1]) + first_multi) / primerValor;
    document.getElementById("n31x5").innerHTML = entero(r1);

        //Cuarta multiplicacion
        fourth_multi = parseFloat(r1) * segundoValor;
        document.getElementById("n18x5").innerHTML = entero(fourth_multi);

        //Quinta multiplicacion
        fifth_multi = parseFloat(r1) * tercerValor;
        document.getElementById("n19x5").innerHTML = entero(fifth_multi);
        
        //Sexta multiplicacion
        sixth_multi = parseFloat(r1) * cuartoValor;
        document.getElementById("n20x5").innerHTML = entero(sixth_multi);

    //---TERCER RESULTADO
    var r2 = (parseFloat(arrayGuardar[2]) + second_multi + fourth_multi) / primerValor;
    document.getElementById("n32x5").innerHTML = entero(r2);

        //Septima multiplicacion
        seventh_multi = parseFloat(r2) * segundoValor;
        document.getElementById("n26x5").innerHTML = entero(seventh_multi);

        //Octava multiplicacion
        eighth_multi = parseFloat(r2) * tercerValor;
        document.getElementById("n27x5").innerHTML = entero(eighth_multi);

        //Novena multiplicacion
        ninth_multi = parseFloat(r2) * cuartoValor;
        document.getElementById("n28x5").innerHTML = entero(ninth_multi);

    //---CUARTO RESULTADO
    var r3 = (parseFloat(arrayGuardar[3]) + third_multi + fifth_multi + seventh_multi);
    document.getElementById("n33x5").innerHTML = entero(r3);

    //---QUINTO RESULTADO 
    var r4 = (parseFloat(arrayGuardar[4]) + sixth_multi + eighth_multi);
    document.getElementById("n34x5").innerHTML = entero(r4);

    //---SEXTO RESULTADO
    var r5 = (parseFloat(arrayGuardar[5]) + ninth_multi);
    document.getElementById("n35x5").innerHTML = entero(r5);

    //Validación de los signos --> cuando se impriman en pantalla salgan con el signo adecuado (Ejemplo:3x^2-3+4)
    var signo = "";
    var signo1 = "";
    var signo2 = "";
    var signo3 = "";
    var signo4 = "";
    var signo5 = "";

    //Resultado 1
    if (r == 0) {
        signo = "";
    } else {
        //decimalToFraction(value,donly=true); --> funcion para transformar de decimal a fracción
        signo = decimalToFraction(r,false).toString() + "x²";
    }

    //Resultado 2
    if (r1 == 0) {
        signo1 = "";
    } else {
        if (r1 > 0) { //Positivo
            signo1 = "+" + decimalToFraction(r1,false).toString() + "x";
        } else { //Negativo
            signo1 = decimalToFraction(r1,false).toString() + "x";
        }
    }

    //Resultado 3
    if (r2 == 0) {
        signo2 = "";
    } else {
        if (r2 > 0) { //Positivo
            signo2 = "+" + decimalToFraction(r2,false).toString();
        } else { //Negativo
            signo2 = decimalToFraction(r2,false).toString();
        }
    }

    //Resultado 4
    if (r3 == 0) {
        signo3 = "";
    } else {
        signo3 = decimalToFraction(r3,false).toString() + "x²";
    }

    //Resultado 5
    if (r4 == 0) {
        signo4 = "";
    } else {
        if (r4 > 0) { //Positivo
            signo4 = "+" + decimalToFraction(r4,false).toString() + "x";
        } else { //Negativo
            signo4 = decimalToFraction(r4,false).toString() + "x";
        }
    }

    //Resultado 6
    if (r5 == 0) {
        signo5 = "";
    } else {
        if (r5 > 0) { //Positivo
            signo5 = "+" + decimalToFraction(r5,false).toString();
        } else { //Negativo
            signo5 = decimalToFraction(r5,false).toString();
        }
    }

    //Cociente
    document.getElementById("cociente").innerHTML = "Cociente: " + signo + signo1 + signo2;

    //Residuo
    document.getElementById("residuo").innerHTML = "Residuo: " + signo3 + signo4 + signo5;
}
