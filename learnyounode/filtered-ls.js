var fs = require('fs')
var path = require('path')

var folder = process.argv[2];
var extension = '.' + process.argv[3];

fs.readdir(folder, function (err,list) {
  if (err) {
    console.error(err);
  }
  list.forEach(function(file){
    if (extension === path.extname(file)) {
      console.log(file);
    }
  })
});
