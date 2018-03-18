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
    // var paso2 = x1 + paso4;
    var x = r1 - paso4;
    if ((x1 * x) + (y1 * y) == r1) {
      document.hola.x.value = x
      document.hola.y.value = y
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

// var x1 = 1;
// var y1 = 3;
// var r1 = 10;
// var x2 = 1;

// function ver() {
//   var sum = "Paso 1: vamos a despejar la x, para esto multiplicamos toda la primera funcion por la x de la segunda. --> " x1 "*" x2 "," y1 "*" x2 "," r1 "*" x2 ;
//   document.getElementById("wow").innerHTML = sum;
// }
