// TODO implement with
// let gm  = require('gm');
// var Jimp = require("jimp");

const fs = require('fs');
const INPUT_IMAGES = './input/';

var generate = function(files) {
  var config = [
    'var logo_url = \'./theme/logo.png\';',
    'var items = [',
        files.map(function(file) { return JSON.stringify(file); }).join(','), // || '  \'background.png\'',
    '];'
  ].join('\n');
  fs.writeFile('config.js', config, function(err) {
    if(err) {
      return console.log(err);
    }
    console.log('The file was saved!');
  });
}

fs.readdir(INPUT_IMAGES, (err, files) => {
  if (err) {
    throw err;
  }
  if (files.lenght === 0) {
    console.log('No existem images <image-merger>/input para procesar');
  } else {
    generate(files);
  }
});
