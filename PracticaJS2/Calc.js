var res;

function suma() {
    var op1 = document.getElementById("operando1");
    var op2 = document.getElementById("operando2");
    res = parseInt(op1.value) + parseInt(op2.value);

    var resultado = document.getElementById("resultado");
    if (isNaN(op1.value) || isNaN(op2.value) || isNaN(res)) {
        resultado.innerHTML = "Error. Introduce valores adecuados";
    } else {
        resultado.innerHTML = res;
    }

    var igual = document.getElementById("igual");
    igual.innerHTML = "=";

    var operador = document.getElementById("operador");
    operador.innerHTML = "+";
}

function resta() {
    var op1 = document.getElementById("operando1");
    var op2 = document.getElementById("operando2");
    res = parseInt(op1.value) - parseInt(op2.value);

    var resultado = document.getElementById("resultado");
    if (isNaN(op1.value) || isNaN(op2.value) || isNaN(res)) {
        resultado.innerHTML = "Error. Introduce valores adecuados";
    } else {
        resultado.innerHTML = res;
    }

    var igual = document.getElementById("igual");
    igual.innerHTML = "=";

    var operador = document.getElementById("operador");
    operador.innerHTML = "-";
}

function mult() {
    var op1 = document.getElementById("operando1");
    var op2 = document.getElementById("operando2");
    res = parseInt(op1.value) * parseInt(op2.value);

    var resultado = document.getElementById("resultado");
    if (isNaN(op1.value) || isNaN(op2.value) || isNaN(res)) {
        resultado.innerHTML = "Error. Introduce valores adecuados";
    } else {
        resultado.innerHTML = res;
    }

    var igual = document.getElementById("igual");
    igual.innerHTML = "=";

    var operador = document.getElementById("operador");
    operador.innerHTML = "*";
}

function div() {
    var op1 = document.getElementById("operando1");
    var op2 = document.getElementById("operando2");
    res = parseInt(op1.value) / parseInt(op2.value);

    var resultado = document.getElementById("resultado");
    if (isNaN(op1.value) || isNaN(op2.value) || isNaN(res)) {
        resultado.innerHTML = "Error. Introduce valores adecuados";
    } else {
        resultado.innerHTML = res;
    }

    var igual = document.getElementById("igual");
    igual.innerHTML = "=";

    var operador = document.getElementById("operador");
    operador.innerHTML = "/";
}


function borrar() {
    var op1 = document.getElementById("operando1");
    op1.value = "";

    var op2 = document.getElementById("operando2");
    op2.value = "";

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    var igual = document.getElementById("igual");
    igual.innerHTML = "";

    var operador = document.getElementById("operador");
    operador.innerHTML = "<br />";
}