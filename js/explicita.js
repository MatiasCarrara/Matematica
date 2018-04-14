function here() {
  var x1 = document.getElementsByName("x1")[0].value;
  var y1 = document.getElementsByName("y1")[0].value;
  var x2 = document.getElementsByName("x2")[0].value;
  var y2 = document.getElementsByName("y2")[0].value;

  var m = ((y1 - y2) / (x1 - x2));
  var n = (y1 - (m * x1));

  if (n >= 0) {
    var text = "y=" + m.toFixed(2) + "x +" + n.toFixed(2) + "" ;
    document.getElementById("show").innerHTML = text;
  }else {
    var text = "y=" + m.toFixed(2) + "x " + n.toFixed(2) + "" ;
    document.getElementById("show").innerHTML = text;
  }
}
