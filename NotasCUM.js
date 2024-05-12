var promedio = 0;
var estado = "Reprobado";

function ids(cual) {
    return document.getElementById(cual);
}

function calcularPromedio() {

    var n1 = parseFloat(ids("txt1").value) || 0;
    var n2 = parseFloat(ids("txt2").value) || 0;
    var n3 = parseFloat(ids("txt3").value) || 0;
    var n4 = parseFloat(ids("txt4").value) || 0;

    promedio = (n1 + n2 + n3 + n4) / 4;


    ids("txtpro").innerHTML = promedio.toFixed(2);
    estado = promedio >= 8 ? "Estas aprobado" : "No aprobaste";
    ids("txtest").innerHTML = estado;
}
