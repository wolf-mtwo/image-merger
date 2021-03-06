if (!logo_url) {
    throw new Error('logo is undefined');
}
if (!items) {
    throw new Error('items is undefined');
}

var generate = function() {
  var logo = new Image();
  logo.src = logo_url;
  // logo.setAttribute('crossOrigin', 'anonymous');
  logo.onload = function() {
    items.forEach(function(item) {
      var image = new Image();
      image.src = 'input/' + item;
      // image.setAttribute('crossOrigin', 'anonymous');
      image.onload = function(err) {
        var canvas = create_canvas(image.width, image.height);
        var ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0);
        ctx.globalAlpha = 0.5;
        ctx.drawImage(logo, x, y);
      };
      image.onerror = function(err) {
        console.error('Image does not exit', err);
      };
    });
  };
}

function create_canvas(width, height) {
  var canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  var main = document.getElementById('wargos-images');
  main.appendChild(canvas);
  return canvas;
}

generate();
