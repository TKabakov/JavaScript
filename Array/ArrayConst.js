//It is a common prctice to declare arrays using const.
const cars = ["Saab", "Volvo", "BMW"];

//Array decared with const cannot be reassigned.
//We can still change elements of a constant array.
console.log(cars[0]);           //Saab

cars[0] = "Toyota";
console.log(cars[0]);           //Toyota

//You can add an element:
cars.push("Audi");
console.log(cars);
//[ 'Toyota', 'Volvo', 'BMW', 'Audi' ]

//Unlike arrays declared with var, const arrays must be initialized, when they are declared.
cars2 = ["Saab", "Volvo", "BMW"];
var cars2;
console.log(cars2);
[ 'Saab', 'Volvo', 'BMW' ]

//Const Block Scope
//An Array declared with const has a block scope.
const cars3 = ["Saab", "Volvo", "BMW"];
console.log(cars3[2]);              //Here is BMW

{ const cars3 = ["Saab", "Volvo", "Toyota"];
console.log(cars3[2])};             //Here is Toyota

console.log(cars3[2]);              //Here is BMW

//Array decalared with var does not have a block scope
var cars4 = ["Saab", "Volvo", "BMW"];
console.log(cars4[2]);              //Here is BMW

{ var cars4 = ["Saab", "Volvo", "Toyota"];
console.log(cars4[2])};             //Here is Toyota

console.log(cars4[2]);              //Here is Toyota

//Redecaring or reassingning an array to const, in the same scope, or in the same block is not allowed.
var cars5 = ["Saab", "Volvo", "BMW"];
//const cars5 = ["Saab", "Volvo", "Toyota"];      //SyntaxError Identifier 'cars5' has already been declared
