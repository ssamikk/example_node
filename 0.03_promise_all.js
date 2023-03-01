const f1 = fetch('https://jsonplaceholder.typicode.com/todos/1')
const f2 = fetch('https://jsonplaceholder.typicode.com/todos/2')
//Promise.all([f1, f2]).then((res) => {
//console.log('Array of results', res)
//})
//.catch((err) => {
//console.error(err)
//})

Promise.all([f1, f2]).then(([res1, res2]) => {
console.log('Results', res1, res2)
})