console.log("Redeclaring a Variables Using var");
var x = 8;
console.log(x);//Here x is 8
{
    var x = 3;
    console.log(x);//Here x is 3
}

console.log(x);//here x is 3

let y = 8;
console.log(y);//Here y is 8
{
    let y = 3;
    console.log(y);//Here y is 3
}

console.log(y);//Here y is 8

console.log("Redeclaring a variable with let, in another scope or in another block is allowed");

let z = 2;//Allowed
console.log(z);//2
{
    let z = 3;//Allowed
    console.log(z);//3
}
{
    let z = 4//Allowed
    console.log(z);//4
}
console.log(z);//2

console.log("With var you can use a variable before it is declared:");
carName = "Toyota";
console.log(carName);//Toyota
var carName;
console.log(carName);//Toyota

console.log("With let you cannot use a variable before it is declared.");

let car = "Citroen"
console.log(car);//Citroen

console.log("Const variables must be assigned a value when they are declared");
const PI = 3.14159265359;
console.log(PI);//3.14159265359

console.log("You can change the elements of a constant array");
//You can create a constat array:
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars[0]);//Saab
cosnole.log(cars[1]);//Volvo

//You can change an element in constat array:
cars[0] = "Toyota";//Toyota changes Saab
console.log(cars[0]);//Toyota
console.log(cars[1]);//Volvo

//You can add an element
cars.push("Audi");//Audi is added and it goes at the end of the arrey
console.log(cars);//[ 'Toyota', 'Volvo', 'BMW', 'Audi' ]
//But you can NOT reassign the array!!!

console.log("Declaring a constant object does NOT make the objects properties unchangeable:");
//Create an object
const myCar = {type:"Toyota", model:"Avensis", color:"white"};

//Change a property of the declared object
myCar.color = "silver";

//Add a property
myCar.owner = "Johnson";

console.log(myCar.type);//Toyota
console.log(myCar.model);//Avensis
console.log(myCar.color);//silver
console.log("Car owner is " + myCar.owner);//Car owner is Johnson

console.log("Declaring a variable with const is similar to let when it comes to Block Scope.");
console.log("The variable a declared in the block, in this example, is not the same as the variable a declared outside the block:");

const a = 10;//Here a is 10
console.log(a);//10

{
    const a = 2;//Here a is 2
    console.log(a);//2
}
console.log(a);//10
//Outside the block a is 10

console.log("Redeclaring a variable with const, in another scope, or in another block, is allowed:");
const b = 2;//Allowed
console.log(b);//2
{
    const b = 3;//Allowed
    console.log(b);//3
}
{
    const b = 4;//Allowed
    console.log(b);//4
}

console.log(b);//2

console.log("Variables defined with const are also hoisted to the top, but not initialized.");
console.log("Meaning: Using a const variable before it is declared will result in a ReferenceError:")

