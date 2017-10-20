// let gm  = require('gm');
var fs = require('fs');
// let gm = require('gm').subClass({imageMagick: true});
// console.log(gm);
// gm()
// .in('-geometry', '0x0+1+1')
// .in('./imput/background.png')
// .in('-geometry', '300x300+100+200')
// .in('./theme/logo.png')
// .flatten()
//

// gm('./imput/background.png')
// // .geometry(0, 0)
// // .append('./theme/logo.png').append(true)
// // .write('res.png', function (err) {
// //   if (err) console.log(err);
// // });
//
// .stream('png', function (err, stdout, stderr) {
//   var writeStream = fs.createWriteStream('res.png');
//   stdout.pipe(writeStream);
// });


var writeStream = fs.createWriteStream('res3.png');
// gm('./imput/background.png')
// .resize('200', '200')
// .stream()
// .pipe(writeStream);


var gm = require('gm');

gm('./background.png')
.resize(353, 257)
.autoOrient()
.write(writeStream, function (err) {
    if (!err) console.log(' hooray! ');
});
