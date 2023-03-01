const getFirstUserData = () => {
return fetch('https://jsonplaceholder.typicode.com/todos') // загрузить список пользователей
.then(response => response.json()) // разобрать JSON
.then(users => users[0]) // выбрать первого пользователя
.then(user => fetch(`/users/${user.name}`)) // загрузить данные о пользователе
.then(userResponse => response.json()) // разобрать JSON
}
getFirstUserData()
// Вот как выглядит решение той же задачи с использованием async/await:
const getFirstUserData2 = async () => {
const response = await fetch('https://jsonplaceholder.typicode.com/todos') // загрузить список пользователей
const users = await response.json() // разобрать JSON
const user = users[0] // выбрать первого пользователя
const userResponse = await fetch(`/users/${user.name}`) // загрузить данные о пользователе
const userData = await user.json() // разобрать JSON
return userData
}
getFirstUserData2()