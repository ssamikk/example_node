var spawn = require('child_process').spawn,
find = spawn('find',['.','-ls']),
grep = spawn('grep',['test']);
grep.stdout.setEncoding('utf8');
// Вывод find направляется на ввод grep
find.stdout.pipe(grep.stdin);
// Выполнение grep с выводом результатов
grep.stdout.on('data', function (data) {
console.log(data);
});
// Обработка ошибок для обеих команд
find.stderr.on('data', function (data) {
console.log('grep stderr: ' + data);
});
grep.stderr.on('data', function (data) {
console.log('grep stderr: ' + data);
});
// Обработка завершения для обеих команд
find.on('close', function (code) {
if (code !== 0) {
console.log('find process exited with code ' + code);
}
});
grep.on('exit', function (code) {
if (code !== 0) {
console.log('grep process exited with code ' + code);
}
});