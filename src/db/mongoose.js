const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://NEEMA:precious123@cluster0.zw4mzd8.mongodb.net/task-manager-api')

const user = mongoose.model('User', {
    name: {
        type : String,
    },
    age: {
        type: Number,
    },
});

const person1 = new user({
    name: "Andrew",
    age: 32,
});

person1
.save()
.then(()=> {
    console.log(person1);
})
.catch((error) => {
    console.log("Error", error);
});