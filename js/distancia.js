function here() {
  var x1 = document.getElementsByName("x1")[0].value;
  var y1 = document.getElementsByName("y1")[0].value;
  var x2 = document.getElementsByName("x2")[0].value;
  var y2 = document.getElementsByName("y2")[0].value;

  var here = (((y2 - y1) * (y2 - y1)) + ((x2 -x1)*(x2 -x1)));
  var hola = "La distancia es: " + Math.sqrt(here)
  document.getElementById("show").innerHTML = hola;
}
