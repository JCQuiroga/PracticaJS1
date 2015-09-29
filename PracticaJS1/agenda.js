
var data = [];

function escribir() {
    var capa = document.getElementById("capaAgenda");
    capa.innerHTML = "";

    for (var i = 0; i < data.length; i++) {
        capa.innerHTML +=i+"-->"+ data[i] + "<br />";
    }
}

function add() {
    var texto = document.getElementById("txtNombre");
    data.push(texto.value);
    escribir();
}

function borrar() {
    var borrar = document.getElementById("txtBorrar");
    data.splice(borrar.value, 1);
    escribir();
}