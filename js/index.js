function operacion() {

  var x1 = document.getElementsByName("x1")[0].value;
  var y1 = document.getElementsByName("y1")[0].value;
  var r1 = document.getElementsByName("r1")[0].value;
  var x2 = document.getElementsByName("x2")[0].value;
  var y2 = document.getElementsByName("y2")[0].value;
  var r2 = document.getElementsByName("r2")[0].value;

  var paso1 = (x1 * x2) - (x2 * x1);
  var paso2 = (y1 * x2) - (y2 * x1);
  var paso3 = (r1 * x2) - (r2 * x1);

  if (paso1 == 0) {
    var y = paso3 / paso2;
    var paso4 = y1 * y;
    // var paso5 = x1 + paso4;
    var x = r1 - paso4;
    if ((x1 * x) + (y1 * y) == r1) {
      document.hola.x.value = x
      document.hola.y.value = y
      var text1 = "Paso 1: vamos a despejar la x, para esto multiplicamos toda la primera funcion por la x de la segunda, y viseversa. -->  (" + x1 + " * " + x2 + ") ___ (" + y1 + " * " + x2 + ") ___ (" + r1 + " * " + x2 + ") y (" + x2 + " * " + x1 + ") ___ (" + y2 + " * " + x1 + ") ___ (" + r2 + " * " + x1 + ")" ;
      var text2 = "Paso 2: restamos las funciones (funcion 1 - funcion 2). -->  (" + (x1 * x2) + " - " + (x2 * x1) + ") ___ (" +(y1 * x2)+ " - " +(y2 * x1)+ ") ___ (" +(r1 * x2)+ " - " +(r2 * x1)+ ")";
      var text3 = "Paso 3: pasamos el multiplicador de Y, dividiendo el resultado ('=') de la funcion. -->  (" + paso3 + " / " + paso2 + ")" ;
      var text4 = "Paso 4: deducimos que la Y es igual a " + y + ". --> Y = " + y + "";
      var text5 = "Paso 5: sustituimos la y de una de las funciones por: " + y + ". --> (" + y1 + " * " + y + ")";
      var text6 = "Paso 6: le restamo a X el resultado de la multiplicacion anterior. --> " + r1 + " - " + paso4 + "";
      var text7 = "Paso 7: deducimos que X es igual a " + x + ". --> X = " + x + "";
      document.getElementById("wow1").innerHTML = text1;
      document.getElementById("wow2").innerHTML = text2;
      document.getElementById("wow3").innerHTML = text3;
      document.getElementById("wow4").innerHTML = text4;
      document.getElementById("wow5").innerHTML = text5;
      document.getElementById("wow6").innerHTML = text6;
      document.getElementById("wow7").innerHTML = text7;

    }
   }
  document.getElementById('show').style.display = "block";
}

// function number(e){
//   var keynum = window.event ? window.event.keyCode : e.which;
//   if ((keynum == 8) || (keynum == 46))
//     return true;
//     return /\d/.test(String.fromCharCode(keynum));
// }
