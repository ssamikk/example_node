const mongoose = require("mongoose");
const Schema = mongoose.Schema;
   
// установка схемы
const userScheme = new Schema({
    name: String,
    age: Number
});
// определяем модель User
const User = mongoose.model("User", userScheme);
// создаем объект модели User
const user = new User({ name: "Mike", age: 411});
 
async function main() {
    // подключемся к базе данных
    await mongoose.connect("mongodb://127.0.0.1:27017/usersdb");
     
    // сохраняем модель user в базу данных
    await user.save();
    console.log("Сохранен объект", user);
 
    let users = await User.find({});
    console.log(users);
    users = await User.findOne({name: "Bill"});
    console.log(users);
    let result = await User.deleteMany({age:41});
    console.log(result);
    // const result = await User.deleteOne({name:"Tom"})
    // console.log(result);    // { acknowledged: true, deletedCount: 1 }
    // const user = await User.findOneAndDelete({name:"Sam"})
    // console.log(user);

    //     const id = "6377c72806fb915eb6621ffd";
    // const user = await User.findByIdAndDelete(id)
    // console.log(user);
    
    result = await User.updateOne({name: "Tom"}, {name: "Tom Smith"})
    console.log(result);

    const userR = await User.findOneAndUpdate({name: "Mike"}, {name: "Alex", age:24}, {new: true});
    console.log("Обновленный объект", userR);

    // отключаемся от базы данных
    await mongoose.disconnect();
}
// запускаем подключение и взаимодействие с базой данных
main().catch(console.log)
.finally(async()=>await mongoose.disconnect());