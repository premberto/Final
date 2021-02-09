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
    var dat =  JSON.parse(localStorage.getItem("productos"));
    $("button").click(function () {
        
        var val = $(this).val();
        var nam = $("#p" + val + " td");
        var let = "";
        for (var a = 0; a < nam.length - 1; a++) {
            if (a === nam.length - 2) {
                let += $(nam[a]).text();
            } else {
                let += $(nam[a]).text() + ",";
            }
        }
        dat.push(let);
        console.log(dat);
        localStorage.setItem("productos",JSON.stringify(dat));
        
        alert("Se a anadido al carrito el producto #"+val);
    });
    
    $("#carro").click(function(){
        window.location.href = "carrito.html";
    });
});

