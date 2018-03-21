function operacion() {
  var x1 = document.getElementsByName("x1")[0].value;
  var y1 = document.getElementsByName("y1")[0].value;
  var r1 = document.getElementsByName("r1")[0].value;
  var x2 = document.getElementsByName("x2")[0].value;
  var y2 = document.getElementsByName("y2")[0].value;
  var r2 = document.getElementsByName("r2")[0].value;

    var y = ((r1 * x2) - (r2 * x1)) / ((y1 * x2) - (y2 * x1));
    var x = (r1 - (y1 * y)) / x1;

    if ((x1 * x) + (y1 * y) == r1) {
      document.hola.x.value = x.toFixed(2);
      document.hola.y.value = y.toFixed(2);
      var step1 = "Paso 1: vamos a despejar la x, para esto multiplicamos toda la primera funcion por la x de la segunda, y viseversa. -->  (" + x1 + " * " + x2 + ") ___ (" + y1 + " * " + x2 + ") ___ (" + r1 + " * " + x2 + ") y (" + x2 + " * " + x1 + ") ___ (" + y2 + " * " + x1 + ") ___ (" + r2 + " * " + x1 + ")" ;
      var step2 = "Paso 2: restamos las funciones (funcion 1 - funcion 2). -->  (" + (x1 * x2) + " - " + (x2 * x1) + ") ___ (" +(y1 * x2)+ " - " +(y2 * x1)+ ") ___ (" +(r1 * x2)+ " - " +(r2 * x1)+ ")";
      var step3 = "Paso 3: pasamos el multiplicador de Y, dividiendo el resultado ('=') de la funcion. -->  (" + ((r1 * x2) - (r2 * x1)) + " / " + ((y1 * x2) - (y2 * x1)) + ")" ;
      var step4 = "Paso 4: deducimos que la Y es igual a " + y + ". --> Y = " + y + "";
      var step5 = "Paso 5: sustituimos la y de una de las funciones por: " + y + ". --> (" + y1 + " * " + y + ")";
      var step6 = "Paso 6: le restamos a X el resultado de la multiplicacion anterior. --> " + r1 + " - " + (y1 * y) + "";
      var step7 = "Paso 7: deducimos que X es igual a " + x + ". --> X = " + x + "";
      document.getElementById("views1").innerHTML = step1;
      document.getElementById("views2").innerHTML = step2;
      document.getElementById("views3").innerHTML = step3;
      document.getElementById("views4").innerHTML = step4;
      document.getElementById("views5").innerHTML = step5;
      document.getElementById("views6").innerHTML = step6;
      document.getElementById("views7").innerHTML = step7;

    }
  document.getElementById('show').style.display = "block";
}
