var listFiles = require('./list-files-ext')
var folder = process.argv[2];
var extension =  process.argv[3];
var callback = function (err, list) {
    if (err) console.log(err);
    list.forEach(function (file) {
        console.log(file);
    })
}

listFiles(folder, extension, callback);
