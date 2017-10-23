var x = 0;
var y = 0;
var load = function() {
  x = localStorage.getItem('x') || 20;
  y = localStorage.getItem('y') || 200;
  document.getElementById('x').value = x;
  document.getElementById('y').value = y;
}
var reDraw = function() {
  var x = document.getElementById('x').value || 0;
  var y = document.getElementById('y').value || 0;
  localStorage.setItem('x', x);
  localStorage.setItem('y', y);
  load();
  generate();
  var main = document.getElementById('wargos-images');
  while (main.hasChildNodes()) {
      main.removeChild(main.firstChild);
  }
}

load();
