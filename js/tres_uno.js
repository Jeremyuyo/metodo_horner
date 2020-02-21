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
        document.getElementById("n2-3").innerHTML = arrayGuardar[0];
        document.getElementById("n3-3").innerHTML = arrayGuardar[1];
        document.getElementById("n4-3").innerHTML = arrayGuardar[2];
        document.getElementById("n5-3").innerHTML = arrayGuardar[3];
    }

        //Segundo Polinomio
    for (var i = 0; i < lstNumber.length; i++) {
        arrayGuardar1[i] = lstNumber[i].value;
        console.log(lstNumber[i].value);
        //Mostrar los indices del segundo polinomio
        document.getElementById("n1-3").innerHTML = arrayGuardar1[0];
        document.getElementById("n6-3").innerHTML = -1 * (arrayGuardar1[1]);
    }

    //Se almacena los indices del segundo polinomio
    var primerValor = parseFloat(arrayGuardar1[0]);
    var segundoValor = -1 * parseFloat(arrayGuardar1[1]);

    //---PRIMER RESULTADO
    var r = parseFloat(arrayGuardar[0]) / primerValor;
    document.getElementById("n22-3").innerHTML = entero(r);  //*Función entero para verificar si es entero (sin decimales) o fraccion (con 3 decimales)
        //Primera multiplicacion
        first_multi = parseFloat(r) * segundoValor;
        document.getElementById("n8-3").innerHTML = entero(first_multi); 
        
    //---SEGUNDO RESULTADO
    var r1 = (parseFloat(arrayGuardar[1]) + first_multi) / primerValor;
    document.getElementById("n23-3").innerHTML = entero(r1); 

    //---TERCER RESULTADO
        //Segunda multiplicacion
        second_multi = parseFloat(r1) * segundoValor;
        document.getElementById("n14-3").innerHTML = entero(second_multi); 

    var r2 = (parseFloat(arrayGuardar[2]) + second_multi) / primerValor;
    document.getElementById("n24-3").innerHTML = entero(r2); 

    //---CUARTO RESULTADO
        //Tercera multiplicacion
        third_multi = parseFloat(r2) * segundoValor;
        document.getElementById("n20-3").innerHTML = entero(third_multi);

    var r3 = (parseFloat(arrayGuardar[3]) + third_multi);
    document.getElementById("n25-3").innerHTML = entero(r3); 


    //Validación de los signos --> cuando se impriman en pantalla salgan con el signo adecuado (Ejemplo:3x^2-3+4)
    var signo = "";
    var signo1 = "";
    var signo2 = "";
    var signo3 = "";

    //Resultado 1
    if (r == 0) {
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
        signo3 = decimalToFraction(r3,false).toString();
    }
    

    //Cociente
    document.getElementById("cociente").innerHTML = "Cociente: " + signo + signo1 + signo2;

    //Residuo
    document.getElementById("residuo").innerHTML = "Residuo: " + signo3;

}
