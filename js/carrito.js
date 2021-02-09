/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
    var aux1 = localStorage.getItem("productos");
    if(aux1 === null){
        var xd = [];
        localStorage.setItem("productos", JSON.stringify(xd));
    }
    
    var dat = JSON.parse(localStorage.getItem("productos"));
    var p = [], total = 0;

    for (var i = 0; i < dat.length; i++) {
        var datos = dat[i].toString().split(',');
        var plan = `<tr id="p${i}">
                <td>${datos[0]}</td>
                <td>${datos[1]}</td>
                <td>${datos[2]}</td>
                <td>${datos[3]}</td>
                <td><button id="R${i}" value="${i}">Eliminar</button></td>
            </tr>`;
        $("#tablaG").append(plan);
        p.push("p" + i);
        var totGr = datos[2].toString().split(" ");
        total += parseFloat(totGr[0]);
    }

    $("#total").text(total + " Q");

    $("button").click(function () {
        var val = $(this).val();
        var it = p.indexOf('p' + val);
        p.splice(it, 1);
        dat.splice(it, 1);
        console.log(p);

        localStorage.setItem("productos", JSON.stringify(dat));
        $("#p" + val).remove();

        total = 0;
        for (var i = 0; i < dat.length; i++) {
            var datos = dat[i].toString().split(',');
            var totGr = datos[2].toString().split(" ");
            total += parseFloat(totGr[0]);
        }
        $("#total").text(total + " Q");
    });

    $("#cancelar").click(function () {
        var c = confirm("Esta seguro que desea cancelar su compra");
        if (c) {
            cancelar();
        }
    });

    var aux = localStorage.getItem("historial");
    if (aux === null) {
        var xd = [];
        localStorage.setItem("historial", JSON.stringify(xd));
    }
    var guard = JSON.parse(localStorage.getItem("historial"));
    console.log(guard);

    $("#pagar").click(function () {
        var prod = [];
        for (var i = 0; i < dat.length; i++) {
            var datos = dat[i].toString().split(',');
            var el = {"desc": datos[1], "precio": datos[2]};
            prod.push(el);
        }

        if (prod.length !== 0) {
            var c = confirm("Desea realizar el pago");
            if (c) {
                var f = new Date();
                var fecha = f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();

                var pago = {
                    "codigo": guard.length, "productos": prod, "total": total + " Q", "fecha": fecha
                };

                guard.push(pago);
                localStorage.setItem("historial", JSON.stringify(guard));
                console.log(guard);
                cancelar();
                alert("Compra realizada con exito, para seguir comprando regrese a la lista de productos.");
            }
        } else {
            alert("No hay productos en su carrito");
        }
    });
    var cancelar = function () {
        $("tr").remove();
        var plan = `<tr>
                    <th>Codigo</th>
                    <th>Descripcion del producto</th>
                    <th>Valor</th>
                    <th>Marca</th>
                    <th>Añandir</th>  
                </tr>`;
        $("#tablaG").append(plan);
        var dat1 = [];
        dat = dat1;
        localStorage.setItem("productos", JSON.stringify(dat1));
        total = 0;
        $("#total").text(total + " Q");
    };
});

