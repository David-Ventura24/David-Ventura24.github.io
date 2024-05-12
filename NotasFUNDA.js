var n1 = 0;
var n2 = 0;
var n3 = 0;
var n4 = 0;
var n5 = 0;
var n6 = 0;
var n7 = 0;
var n8 = 0;
var n9 = 0;
var n10 = 0;
var n11 = 0;
var n12 = 0;
var n13 = 0;
var n14 = 0;

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
    n7 = parseFloat(ids("txt7").value) || 0;
    n8 = parseFloat(ids("txt8").value) || 0;
    n9 = parseFloat(ids("txt9").value) || 0;
    n10 = parseFloat(ids("txt10").value) || 0;
    n11 = parseFloat(ids("txt11").value) || 0;
    n12 = parseFloat(ids("txt12").value) || 0;
    n13 = parseFloat(ids("txt13").value) || 0;
    n14 = parseFloat(ids("txt14").value) || 0;

    
    var totalLab = (n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9) / 9;
    var totalCortos = (n10 + n11) / 2; 
    var totalParciales = (n12 + n13) / 2; 

    promedio = (totalLab * 0.44) + (totalCortos * 0.02) + (totalParciales * 0.44) + (n14 * 0.1);

   
    ids("txtpro").innerHTML = promedio.toFixed(2);
    estado = promedio >= 6 ? "Aprobado" : "Reprobado";
    ids("txtest").innerHTML = estado;
}
