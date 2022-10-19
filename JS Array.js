const cars = ["Volvo", "Fiat", "BMW"];
console.log(cars);
//Spaces and line breaks are not important. A declaration can span multiple lines:
const car = [
    "Volvo",
    "Fiat",
    "BMW"
];
console.log(car);

//You can also create an array, and then provide the elements
const myCar = [];
myCar [0] = "Volvo";
myCar [1] = "Fiat";
myCar [2] = "BMW";
console.log(myCar);

/*
JavaScript array elements are accessed using numeric indexes (starting from 0).
*/

const myCars = ["Volvo", "Fiat", "BMW"];
console.log(myCars[0]);
console.log(myCars[2]);
/*
JavaScript array elements are accessed using numeric indexes (starting from 0)
*/
console.log(myCars);
myCars[0] = "Opel";
console.log(myCars)

/*
With JavaScript, the full array can be ccessed by referring to the array name:
*/
console.log(myCars);

/*
Arrays use numbers to access its elements.
*/
console.log(myCars[1]);
console.log(myCars[0]);

/*
Objects use names to access its "members".
*/
const person ={firstName:"John", secondName:"Smith",age:45};
console.log(person.secondName);
console.log(person.age);

/*
You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:
*/

function myFunction(a, b){
    return a * b;
}
var a = 3;
var b = 4;

const myArray = [];
myArray [0] = myFunction(a,b);
myArray [1] = myCars;
myArray [2] = Date.now;

console.log(myArray);

/*
The length property returns the length of an array.
*/
const fruits = [" Bananas", " Orange", " Mango", " Apple"];
console.log(fruits.length);
console.log(myCars.length);

//Accessing the Last Array Element
let fruit = fruits[fruits.length-1];
console.log(fruit);
/*
cars.sort()   // Sorts the array
*/
console.log(myCars);
console.log(myCars.sort());

/*
The easiest way to add a new element to an array is using the push() method:
*/
console.log(fruits);

function newElement(){
    fruits.push("Lemon");
}
newElement();
console.log(fruits);
/*
The length property provides an easy way to append new elements to an array without using the push() method.
*/
function addElement(){
    fruits[fruits.length] = "Mandarinas";
}
console.log(fruits);
addElement();
console.log(fruits);
/*
WARNING !
Adding elements with high indexes can create undefined "holes" in an array:
*/
fruits[8] = "Watermelow";
let fLen = fruits.length;
let text ="";
for (i = 0; i < fLen; i++){
    text += fruits[i]+", ";
}
console.log(text);
/*
If you use a named index when accessing an array, 
JavaScript will redefine the array to a standard object, 
and some array methods and properties will produce undefined or incorrect results.
*/
const persona = [];
persona["firstName"] = "John";
persona["lastName"] = "Smith";
persona["age"] = 45;
console.log(persona[0]);
console.log(persona.length);
/*
Avoid using new Array(). Use [] instead.
*/
const points = new Array(30,50,100);
const points2 = [30,50,100];
console.log(points[2]);
console.log(points2[2]);
/*
How to recognize an Array?
Solution 1: by using Array.isArray() method;
Solution 2: by using operator instanceof;
*/
console.log(Array.isArray(points));
console.log(points instanceof Array);

const Cars = ["Citroen", "Renault", "Peugeot"];
let x = Cars[2];
console.log(x);
Cars[0] = "Mazda";
console.log(Cars);
let t = Cars.length;
console.log(Cars.length);




