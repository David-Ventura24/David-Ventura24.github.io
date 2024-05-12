var n1 = 0;
var n2 = 0;
var n3 = 0;
var n4 = 0;
var n5 = 0;
var n6 = 0;

var promedio = 0;
var estado = "Reprobado";

function ids(cual) {
    return document.getElementById(cual);
}

function calcularPromedio() {

    n1 = parseFloat(ids("txt1").value) || 0;
    n2 = parseFloat(ids("txt2").value) || 0;
    n3 = parseFloat(ids("txt3").value) || 0;
    n4 = parseFloat(ids("txt4").value) || 0;
    n5 = parseFloat(ids("txt5").value) || 0;
    n6 = parseFloat(ids("txt6").value) || 0;

   
    var totalLab = (n1 + n2 + n3) / 3;
    var Parcial1 = n4 ; 
    var totalParciales = (n5 + n6) / 2; 

    promedio = (totalLab * 0.30) + (Parcial1 * 0.20) + (totalParciales * 0.50);

    ids("txtpro").innerHTML = promedio.toFixed(2);
    estado = promedio >= 6 ? "Aprobado" : "Reprobado";
    ids("txtest").innerHTML = estado;
}
