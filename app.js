const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Check your name!']
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
})

const Person = mongoose.model("Person", personSchema);

const grape = new Fruit({
  name: "grape",
  score: 9,
  review: "Sweet and sour!"
})

grape.save();

const person = new Person({
  name: "Amy",
  age: 12,
  favoriteFruit: grape
})

person.save();


// const fruit = new Fruit({
//   name: "Apple2",
//   rating: 7,
//   review:"Pretty solid as a fruit!"
// });

// fruit.save();

// const kiwi = new Fruit({
//   name: "kiwi",
//   rating: 8,
//   review:"Pretty Nice!"
// });

// const orange = new Fruit({
//   name: "orange",
//   rating: 6,
//   review:"Vitamin C!"
// });

// const banana = new Fruit({
//   name: "banana",
//   rating: 9,
//   review:"Like it!"
// });

// Fruit.insertMany([kiwi, orange, banana], err =>{
//   if(err){
//     console.log(err);
//   }else{
//     console.log('Success!');
//   }
// });

// Fruit.updateOne({_id: '62b51e9bdd6f8d8c11ec5cc3'}, {name: "Apple_123"}, function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Success!");
//   }
// })

// Fruit.deleteMany({name: "Apple_123"}, function(err){
//   if (err) {
//     console.log(err);
//   }else{
//     console.log("Successfully Delete !");
//   }
// });


Person.find(function(err, objary){
  if (err) {
    console.log(err);
  }else{

    // objary.forEach(ele=>{
    //   console.log(ele.name);
    // });
    console.log(objary);
    // mongoose.connection.close();
  }
})

