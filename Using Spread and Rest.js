const fruits = ["apple", "pear", "plum"];
const berries = [ "blueberry", "strawberry"];
const fruitsAndBerries = [...fruits, ...berries];//concstinate
console.log(fruitsAndBerries);
//[ 'apple', 'pear', 'plum', 'blueberry', 'strawberry' ]

//It's easy to join objects
const car = { wheels:4};
const fly = { wings:2};
const flyingCar = {...fly, ...car};
console.log(flyingCar);
//{ wings: 2, wheels: 4 }

//Adding new members of an arrey without using the push() method.
let veggies = ["onion", "parsley"];
veggies = [ ...veggies, "carrot", "beetroot"];
console.log(veggies);
//{ wings: 2, wheels: 4 }

//Converting an arrey to string.
const greeting = "Hello";
const arreyOfChars = [...greeting];
console.log(arreyOfChars);
//[ 'H', 'e', 'l', 'l', 'o' ]

//Copy an object or an array into separate one.
const car1 = {
    speed: 200,
    color: "yellow"
}
const car2 = {...car1};

car1.speed = 210;

console.log(car1.speed, car2.speed);
//210 200

const fruits1 = ["apple", "pears"];
const fruits2 = [...fruits1];
fruits1.pop();
console.log(fruits1, "not", fruits2);
//[ 'apple' ] not [ 'apple', 'pears' ]


