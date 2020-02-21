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
        document.getElementById("n2").innerHTML = arrayGuardar[0];
        document.getElementById("n3").innerHTML = arrayGuardar[1];
        document.getElementById("n4").innerHTML = arrayGuardar[2];
        document.getElementById("n5").innerHTML = arrayGuardar[3];
        document.getElementById("n6").innerHTML = arrayGuardar[4];
    }
        //Segundo Polinomio
    for (var i = 0; i < lstNumber.length; i++) {
        arrayGuardar1[i] = lstNumber[i].value;
        console.log(lstNumber[i].value);
        //Mostrar los indices del segundo polinomio
        document.getElementById("n1").innerHTML = arrayGuardar1[0];
        document.getElementById("n7").innerHTML = -1 * (arrayGuardar1[1]);
        document.getElementById("n13").innerHTML = -1 * (arrayGuardar1[2]);
    }

    //Se almacena los indices del segundo polinomio
    var primerValor = parseFloat(arrayGuardar1[0]);
    var segundoValor = -1 * parseFloat(arrayGuardar1[1]);
    var tercerValor = -1 * parseFloat(arrayGuardar1[2]);

    //---PRIMER RESULTADO
    var r = parseFloat(arrayGuardar[0]) / primerValor;
    document.getElementById("n26").innerHTML = entero(r); //*Función entero para verificar si es entero (sin decimales) o fraccion (con 3 decimales)

        //Primera multiplicacion
        first_multi = parseFloat(r) * segundoValor;
        document.getElementById("n9").innerHTML = entero(first_multi);
        //Segunda multiplicacion
        second_multi = parseFloat(r) * tercerValor;
        document.getElementById("n10").innerHTML = entero(second_multi); 

    //---SEGUNDO RESULTADO
    var r1 = (parseFloat(arrayGuardar[1]) + first_multi) / primerValor;
    document.getElementById("n27").innerHTML = entero(r1); 

    //---TERCER RESULTADO
        //Tercera multiplicacion
        third_multi = parseFloat(r1) * segundoValor;
        document.getElementById("n16").innerHTML = entero(third_multi);
        //Cuarta multiplicación
        fourth_multi = parseFloat(r1) * tercerValor;
        document.getElementById("n17").innerHTML = entero(fourth_multi);

    var r2 = (parseFloat(arrayGuardar[2]) + second_multi + third_multi) / primerValor;
    document.getElementById("n28").innerHTML = entero(r2); 

    //---CUARTO RESULTADO
        //Quinta multiplicación
        fifth_multi = parseFloat(r2) * segundoValor;
        document.getElementById("n23").innerHTML = entero(fifth_multi);
        //Sexta multiplicación
        sixth_multi = parseFloat(r2) * tercerValor;
        document.getElementById("n24").innerHTML = entero(sixth_multi);

    var r3 = (parseFloat(arrayGuardar[3]) + fourth_multi + fifth_multi);
    document.getElementById("n29").innerHTML = entero(r3); 

    //---QUINTO RESULTADO
    var r4 = (parseFloat(arrayGuardar[4]) + sixth_multi);
    document.getElementById("n30").innerHTML = entero(r4); 

    //Validación de los signos --> cuando se impriman en pantalla salgan con el signo adecuado (Ejemplo:3x^2-3+4)
    var signo = "";
    var signo1 = "";
    var signo2 = "";
    var signo3 = "";
    var signo4 = "";

    //Resultado 1
    if(r == 0){
        signo = "";
    } else {
        //decimalToFraction(value,donly=true); --> funcion para transformar de decimal a fracción
        signo = decimalToFraction(r,false).toString() + "x²";
    }

    //Resultado 2
    if(r1 == 0){
        signo1 = "";
    } else {
        if (r1 > 0) { //Positivo
            signo1 = "+" + decimalToFraction(r1,false).toString() + "x";
        } else { //Negativo
            signo1 = decimalToFraction(r1,false).toString() + "x";
        }
    }

    //Resultado 3
    if(r2 == 0){
        signo2 = "";
    } else {
        if (r2 > 0) {
            signo2 = "+" + decimalToFraction(r2,false).toString(); 
        } else {
            signo2 = decimalToFraction(r2,false).toString();
        }
    }

    //Resultado 4
    if(r3 == 0){
        signo3 = "";
    } else {
        signo3 = decimalToFraction(r3,false).toString() + "x";
    }
    
    //Resultado 5
    if(r4 == 0){
        signo4 = "";
    } else {
        if (r4 > 0) {
            signo4 = "+" + decimalToFraction(r4,false).toString(); 
        } else {
            signo4 = decimalToFraction(r4,false).toString();
        }
    }

    //Cociente
    document.getElementById("cociente").innerHTML = "Cociente: " + signo + signo1 + signo2;

    //Residuo
    document.getElementById("residuo").innerHTML = "Residuo: " + signo3  + signo4 ;

}
