/*
//Empleando una función para cada botón. Es algo redundante, pero más sencillo
var suma = function () {
    var n1 = parseFloat(document.getElementById("txtN1").value);
    var n2 = parseFloat(document.getElementById("txtN2").value);
    var res = n1 + n2;

    document.getElementById("lbOpe").innerHTML = "+";
    document.getElementById("lbTot").innerHTML = res;
}

var resta = function () {
    var n1 = parseFloat(document.getElementById("txtN1").value);
    var n2 = parseFloat(document.getElementById("txtN2").value);
    var res = n1 - n2;

    document.getElementById("lbOpe").innerHTML = "-";
    document.getElementById("lbTot").innerHTML = res;
}

var multiplicar = function () {
    var n1 = parseFloat(document.getElementById("txtN1").value);
    var n2 = parseFloat(document.getElementById("txtN2").value);
    var res = n1 * n2;

    document.getElementById("lbOpe").innerHTML = "*";
    document.getElementById("lbTot").innerHTML = res;
}

var dividir = function () {
    var n1 = parseFloat(document.getElementById("txtN1").value);
    var n2 = parseFloat(document.getElementById("txtN2").value);
    var res = n1 / n2;

    document.getElementById("lbOpe").innerHTML = "/";
    document.getElementById("lbTot").innerHTML = res.toFixed(2); //Limita a 2 decimales
}

    document.getElementById("btnMas").onclick = suma;
    document.getElementById("btnMenos").onclick = resta;
    document.getElementById("btnPor").onclick = multiplicar;
    document.getElementById("btnDividir").onclick = dividir;
*/

//Esta funcion reduce todas las funciones anteriores a una. Con eval() analiza la expresión y la evalua

    var operar = function (e) { 
        var n1 = parseFloat(document.getElementById("txtN1").value);
        var n2 = parseFloat(document.getElementById("txtN2").value);
        var operador = e.target.outerText; //Con este método tomamos lo que hay escrito en el boton, que en este caso está acoplado. Si no lo estuviese, habría que hacer un switch o algo asi.
        var res = eval(n1 + operador + n2);
        document.getElementById("lbOpe").innerHTML = operador;
        document.getElementById("lbTot").innerHTML = res.toFixed(2); 
    }

    document.getElementById("btnMas").onclick = operar;
    document.getElementById("btnMenos").onclick = operar;
    document.getElementById("btnPor").onclick = operar;
    document.getElementById("btnDividir").onclick = operar;

//Cambio de prueba para GitHub