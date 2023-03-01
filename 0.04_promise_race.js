const first = new Promise((resolve, reject) => {
setTimeout(resolve, 500, 'first')
})
const second = new Promise((resolve, reject) => {
setTimeout(resolve, 100, 'second')
})
Promise.race([first, second]).then((result) => {
console.log(result) // second
})