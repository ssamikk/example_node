var readline = require('readline');
// Создание нового интерфейса
var rl = readline.createInterface(process.stdin, process.stdout);
// Вопрос
rl.question(">>What is the meaning of life? ", function(answer) {
console.log("About the meaning of life, you said " + answer);
rl.setPrompt(">> ");
rl.prompt();
});
// Функция для закрытия интерфейса
function closeInterface() {
rl.close();
console.log('Leaving Readline');
}
// Прослушивание .leave
rl.on('line', function(cmd) {
if (cmd.trim() == '.leave') {
closeInterface();
return;
}
console.log("repeating command: " + cmd);
rl.prompt();
});
rl.on('close', function() {
closeInterface();
});