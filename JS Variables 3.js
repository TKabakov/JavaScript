console.log("Redeclaring a Variables Using var");
var x = 8;//Here x is 8
console.log(x);
{
    var x = 3;//Here x is 3
    console.log(x);
}
//here x is 3
console.log(x)

let y = 8;//Here y is 8
console.log(y);
{
    let y = 3;//Here y is 3
    console.log(y);
}
//Here y is 8
console.log(y);

console.log("Redeclaring a variable with let, in another scope or in another block is allowed");

let z = 2;//Allowed
console.log(z);
{
    let z = 3;//Allowed
    console.log(z);
}
{
    let z = 4//Allowed
    console.log(z);
}
console.log(z);

console.log("With var you can use a variable before it is declared:");
carName = "Toyota";
console.log(carName);
var carName;
console.log(carName);

console.log("With let you cannot use a variable before it is declared.");

let car = "Citroen"
console.log(car);

console.log("Const variables must be assigned a value when they are declared");
const PI = 3.14159265359;
console.log(PI);

console.log("You can change the elements of a constant array");
//You can create a constat array:
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars[0]);
//You can change an element in constat array:
cars[0] = "Toyota";//Toyota changes Saab
console.log(cars[0]);
console.log(cars[1]);

//You can add an element
cars.push("Audi");
console.log(cars);
//But you can NOT reassign the array!!!

console.log("Declaring a constant object does NOT make the objects properties unchangeable:");
//Create an object
const myCar = {type:"Toyota", model:"Avensis", color:"white"};

//Change a property of the declared object
myCar.color = "silver";

//Add a property
myCar.owner = "Johnson";

console.log(myCar.type);
console.log(myCar.model);
console.log(myCar.color);
console.log("Car owner is " + myCar.owner);

console.log("Declaring a variable with const is similar to let when it comes to Block Scope.");
console.log("The variable a declared in the block, in this example, is not the same as the variable a declared outside the block:");

const a = 10;//Here a is 10
console.log(a);

{
    const a = 2;//Here a is 2
    console.log(a);
}
console.log(a);
//Outside the block is 10

console.log("Redeclaring a variable with const, in another scope, or in another block, is allowed:");
const b = 2;//Allowed
console.log(b);
{
    const b = 3;//Allowed
    console.log(b);
}
{
    const b = 4;//Allowed
    console.log(b);
}

console.log("Variables defined with const are also hoisted to the top, but not initialized.");
console.log("Meaning: Using a const variable before it is declared will result in a ReferenceError:")

