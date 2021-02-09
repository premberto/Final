/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {
    var aux1 = localStorage.getItem("historial");
    if (aux1 === null) {
        var xd = [];
        localStorage.setItem("historial", JSON.stringify(xd));
    }


    var guard = JSON.parse(localStorage.getItem("historial"));
    console.log(guard);
    for (var a = 0; a < guard.length; a++) {
        var datos = guard[a];
        var prod = datos.productos;
        console.log(prod);

        var plantilla = `<tr>
                    <td>${datos.codigo}</td>
                    <td id = "v${a}">
                           </td>
                    <td>${datos.total}</td>
                    <td>${datos.fecha}</td>
                </tr>`;
        $("#tablaG").append(plantilla);

        for (var i = 0; i < prod.length; i++) {
            $("#v" + a).append("<br>" + '<span> Descripcion:  ' + prod[i].desc + '   Precio:  ' + prod[i].precio + ' </span>');
        }
       
    }

   
    $("#Limpiar").click(function () {
        var c = confirm("Esta seguro de eliminar el historial *No se puede recuperar.");
        if (c) {
            var xd = [];
            localStorage.setItem("historial", JSON.stringify(xd));
            $("tr").remove();
            var pl = `<tr>
                    <th>Codigo</th>
                    <th>Productos</th>
                    <th>Total</th>
                    <th>Fecha de Venta</th> 
                </tr>`;
            $("#tablaG").append(pl);
        }
    });
});


