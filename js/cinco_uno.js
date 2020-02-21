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
        document.getElementById("n2-5").innerHTML = arrayGuardar[0];
        document.getElementById("n3-5").innerHTML = arrayGuardar[1];
        document.getElementById("n4-5").innerHTML = arrayGuardar[2];
        document.getElementById("n5-5").innerHTML = arrayGuardar[3];
        document.getElementById("n6-5").innerHTML = arrayGuardar[4];
        document.getElementById("n7-5").innerHTML = arrayGuardar[5];
    }

    //Segundo Polinomio
    for (var i = 0; i < lstNumber.length; i++) {
        arrayGuardar1[i] = lstNumber[i].value;
        console.log(lstNumber[i].value);
        //Mostrar los indices del segundo polinomio
        document.getElementById("n1-5").innerHTML = arrayGuardar1[0];
        document.getElementById("n8-5").innerHTML = -1 * (arrayGuardar1[1]);
    }

    //Se almacena los indices del segundo polinomio
    var primerValor = parseFloat(arrayGuardar1[0]);
    var segundoValor = -1 * parseFloat(arrayGuardar1[1]);

    //---PRIMER RESULTADO
    var r = parseFloat(arrayGuardar[0]) / primerValor;
    document.getElementById("n44-5").innerHTML = entero(r); //*Función entero para verificar si es entero (sin decimales) o fraccion (con 3 decimales) 
    
        //Primera multiplicacion
        first_multi = parseFloat(r) * segundoValor;
        document.getElementById("n10-5").innerHTML = entero(first_multi);

    //---SEGUNDO RESULTADO
    var r1 = (parseFloat(arrayGuardar[1]) + first_multi) / primerValor;
    document.getElementById("n45-5").innerHTML = entero(r1);

    //---TERCER RESULTADO
        //Segunda multiplicacion
        second_multi = parseFloat(r1) * segundoValor;
        document.getElementById("n18-5").innerHTML = entero(second_multi);

    var r2 = (parseFloat(arrayGuardar[2]) + second_multi) / primerValor;
    document.getElementById("n46-5").innerHTML = entero(r2);

    //---CUARTO RESULTADO
        //Tercera multiplicacion
        third_multi = parseFloat(r2) * segundoValor;
        document.getElementById("n26-5").innerHTML = entero(third_multi);

    var r3 = (parseFloat(arrayGuardar[3]) + third_multi) / primerValor;
    document.getElementById("n47-5").innerHTML = entero(r3);

    //---QUINTO RESULTADO
        //Cuarta multiplicacion
        fourth_multi = parseFloat(r3) * segundoValor;
        document.getElementById("n34-5").innerHTML = entero(fourth_multi);

    var r4 = (parseFloat(arrayGuardar[4]) + fourth_multi) / primerValor;
    document.getElementById("n48-5").innerHTML = entero(r4);

    //---SEXTO RESULTADO
        //Quinta multiplicacion
        fifth_multi = parseFloat(r4) * segundoValor;
        document.getElementById("n42-5").innerHTML = entero(fifth_multi);
    
    var r5 = (parseFloat(arrayGuardar[5]) + fifth_multi);
    document.getElementById("n49-5").innerHTML = entero(r5);

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
        signo = decimalToFraction(r,false).toString() + "x⁴";
    }

    //Resultado 2
    if (r1 == 0) {
        signo1 = "";
    } else {
        if (r1 > 0) { //Positivo
            signo1 = "+" + decimalToFraction(r1,false).toString() + "x³";
        } else { //Negativo
            signo1 = decimalToFraction(r1,false).toString() + "x³";
        }
    }

    //Resultado 3
    if (r2 == 0) {
        signo2 = "";
    } else {
        if (r2 > 0) { //Positivo
            signo2 = "+" + decimalToFraction(r2,false).toString() + "x²";
        } else { //Negativo
            signo2 = decimalToFraction(r2,false).toString() + "x²";
        }
    }

    //Resultado 4
    if (r3 == 0) {
        signo3 = "";
    } else {
        if (r3 > 0) { //Positivo
            signo3 = "+" + decimalToFraction(r3,false).toString() + "x";
        } else { //Negativo
            signo3 = decimalToFraction(r3,false).toString() + "x";
        }
    }

    //Resultado 5
    if (r4 == 0) {
        signo4 = "";
    } else {
        if (r4 > 0) { //Positivo
            signo4 = "+" + decimalToFraction(r4,false).toString();
        } else { //Negativo
            signo4 = decimalToFraction(r4,false).toString();
        }
    }

    //Resultado 6
    if (r5 == 0) {
        signo5 = "0";
    } else {
        signo5 = decimalToFraction(r5,false).toString();
    }

    //Cociente
    document.getElementById("cociente").innerHTML = "Cociente: " + signo + signo1 + signo2 + signo3 + signo4;

    //Residuo
    document.getElementById("residuo").innerHTML = "Residuo: " + signo5;
}
