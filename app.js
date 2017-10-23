// let gm  = require('gm');
var fs = require('fs');

var Jimp = require("jimp");

// open a file called "lenna.png"
// Jimp.read('./theme/logo.png', function (err, lenna) {
//     if (err) throw err;
//     lenna.resize(256, 256)            // resize
//          .quality(100)                 // set JPEG quality
//          .greyscale()                 // set greyscale
//          .write("lena-small-bw.jpg"); // save
// });
// Jimp.read('./imput/background.png', function (err, lenna) {
//     if (err) throw err;
//     lenna.resize(256, 256)            // resize
//          .quality(100)                 // set JPEG quality
//          .greyscale()                 // set greyscale
//          .write("lena-small-bw.jpg"); // save
// });


Jimp.read('./imput/background.png').then(function (lenna) {
    lenna.resize(256, 256)            // resize
         .quality(60)                 // set JPEG quality
         .greyscale()                 // set greyscale
         .write("lena-small-bw.jpg"); // save
}).catch(function (err) {
    console.error(err);
});

// let gm = require('gm');
//
// let change_image_url = './theme/logo.png';
// let base_image_url = './imput/background.png';
// let output_file = 'res.png';
// gm()
// .command("composite")
// .in("-gravity", "center")
// .in(change_image_url)
// .in(base_image_url)
// .write( output_file, function (err) {
//   if (!err)
//     console.log(' hooray! ');
//   else
//     console.log(err);
// });


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

//
// var writeStream = fs.createWriteStream('res3.png');
// // gm('./imput/background.png')
// // .resize('200', '200')
// // .stream()
// // .pipe(writeStream);
//
//
// var gm = require('gm');
//
// gm('./background.png')
// .resize(353, 257)
// .autoOrient()
// .write(writeStream, function (err) {
//     if (!err) console.log(' hooray! ');
// });
