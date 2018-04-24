function here() {
  var x1 = document.getElementsByName("x1")[0].value;
  var y1 = document.getElementsByName("y1")[0].value;
  var x2 = document.getElementsByName("x2")[0].value;
  var y2 = document.getElementsByName("y2")[0].value;

  var m = ((y1 - y2) / (x1 - x2));
  var n = (y1 - (m * x1));

  if (x1 == x2) {
      var text = "x = " + x1 ;
      var p = "pendiente: "+ x1 +"  puntos: "+ x1 + " "+ y1 + "";
      var g = "x = "+x1;
  }else{
    if (n >= 0) {
      var text = "y = " + m.toFixed(2) + "x +" + n.toFixed(2) + "" ;
      var p = "pendiente: "+ m +"  puntos: "+ x1 + " "+ y1 + "";
      var g = ""+m+"x -1x +"+n+ "";
    }else {
      var text = "y = " + m.toFixed(2) + "x " + n.toFixed(2) + "" ;
      var p = "pendiente: "+ m +"  puntos: ("+ x1 + " , "+ y1 + ")";
      var g = ""+m+"x -1x "+n+ "";
    }
  }
  document.getElementById("show").innerHTML = text;
  document.getElementById("here").innerHTML = p;
  document.getElementById("hola").innerHTML = g;
}
