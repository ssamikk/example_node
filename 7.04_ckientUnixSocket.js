var net = require('net');
var client = new net.Socket();
client.setEncoding('utf8');
// Подключение к серверу
client.connect ('/somepath/nodesocket', function () {
console.log('connected to server');
client.write('Who needs a browser to communicate?');
});
// Полученные данные отправляются серверу
process.stdin.on('data', function (data) {
client.write(data);
});
// Возвращаемые данные выводятся на консоль
client.on('data',function(data) {
console.log(data);
});
// При закрытии сервера
client.on('close',function() {
console.log('connection is closed');
});