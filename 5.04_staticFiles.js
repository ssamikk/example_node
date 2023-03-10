var http = require('http'),
url = require('url'),
fs = require('fs'),
mime = require('mime'),
path = require('path');
var base = './public_html';
http.createServer(function (req, res) {
pathname = path.normalize(base + req.url);
console.log(pathname);
fs.stat(pathname, function(err, stats) {
if (err) {
res.writeHead(404);
res.write('Resource missing 404\n');
res.end();
} else if (stats.isFile()) {
// Тип контента
var type = mime.lookup(pathname);
console.log(type);
res.setHeader('Content-Type', type);
// Создание и перенаправление потока для чтения
var file = fs.createReadStream(pathname);
file.on("open", function() {
// Код 200 - файл найден, ошибок нет
res.statusCode = 200;
file.pipe(res);
});
file.on("error", function(err) {
console.log(err);
res.statusCode = 403;
res.write('file permission');
res.end();
});
} else {
res.writeHead(403);
res.write('Directory access is forbidden');
res.end();
}
});
}).listen(8124);
console.log('Server running at 8124');