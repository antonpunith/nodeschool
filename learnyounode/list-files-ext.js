var fs = require('fs')
var path = require('path')

function listFiles (folder, extension, callback) {
  fs.readdir(folder, function (err,list) {
    var filterFiles = [];
    if (err) {
      return callback(err, filterFiles);
    }
    list.forEach(function(file){
      if ('.' + extension === path.extname(file)) {
        filterFiles.push(file);
      }
    });
    return callback(null, filterFiles);
  });
}

module.exports = listFiles;
