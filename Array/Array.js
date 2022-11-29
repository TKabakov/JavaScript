const cars = ["Volvo", "Fiat", "BMW"];
console.log(cars);
//[ 'Volvo', 'Fiat', 'BMW' ]

//Spaces and line breaks are not important. A declaration can span multiple lines:

const car = [
    "Volvo",
    "Fiat",
    "BMW"
];
console.log(car);
//[ 'Volvo', 'Fiat', 'BMW' ]

//You can also create an array, and then provide the elements
const myCar = [];
myCar [0] = "Volvo";
myCar [1] = "Fiat";
myCar [2] = "BMW";
console.log(myCar);
//[ 'Volvo', 'Fiat', 'BMW' ]

//JavaScript array elements are accessed using numeric indexes (starting from 0).

const myCars = ["Volvo", "Fiat", "BMW"];
console.log(myCars[0]);//Volvo
console.log(myCars[1]);//Fiat
console.log(myCars[2]);//BMW

//JavaScript array elements are accessed using numeric indexes (starting from 0)
console.log(myCars);
//[ 'Volvo', 'Fiat', 'BMW' ]
myCars[0] = "Opel";
console.log(myCars)
//[ 'Opel', 'Fiat', 'BMW' ]

//With JavaScript, the full array can be accessed by referring to the array name:
console.log(myCars);
//[ 'Opel', 'Fiat', 'BMW' ]

//Arrays use numbers to access its elements.
console.log(myCars[1]);//Fiat
console.log(myCars[0]);//Opel

//Objects use names to access its "members".
const person ={firstName:"John", secondName:"Smith",age:45};
console.log(person.secondName);//Smith
console.log(person.age);//45

//You can have objects in an Array. 
//You can have functions in an Array. 
//You can have arrays in an Array:

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
//[ 12, [ 'Opel', 'Fiat', 'BMW' ], [Function: now] ]

//The length property returns the length of an array.
const fruits = [" Bananas", " Orange", " Mango", " Apple"];
console.log(fruits.length);//4
console.log(myCars.length);//3

//Accessing the Last Array Element
let fruit = fruits[fruits.length-1];
console.log(fruit);//Apple

//cars.sort() sorts the array
console.log(myCars);
//[ 'Opel', 'Fiat', 'BMW' ]
console.log(myCars.sort());
//[ 'BMW', 'Fiat', 'Opel' ]

//The easiest way to add a new element to an array is using the push() method:
console.log(fruits);
//[ ' Bananas', ' Orange', ' Mango', ' Apple' ]
function newElement(){
    fruits.push("Lemon");
}
newElement();
console.log(fruits);
//[ ' Bananas', ' Orange', ' Mango', ' Apple', 'Lemon' ]

//The length property provides an easy way to append new elements to an array without using the push() method.

console.log(fruits);
[ ' Bananas', ' Orange', ' Mango', ' Apple', 'Lemon' ]

function addElement(){
    fruits[fruits.length] = "Mandarinas";
}
addElement();

console.log(fruits);
[ ' Bananas', ' Orange', ' Mango', ' Apple', 'Lemon', 'Mandarinas' ]

//WARNING !
//Adding elements with high indexes can create undefined "holes" in an array:

fruits[8] = "Watermelow";
let fLen = fruits.length;
let text ="";
for (i = 0; i < fLen; i++){
    text += fruits[i]+", ";
}
console.log(text);
//Bananas,  Orange,  Mango,  Apple, Lemon, Mandarinas, undefined, undefined, Watermelow, undefined

//If you use a named index when accessing an array, 
//JavaScript will redefine the array to a standard object, 
//and some array methods and properties will produce undefined or incorrect results.
const persona = [];
persona["firstName"] = "John";
persona["lastName"] = "Smith";
persona["age"] = 45;
console.log(persona[0]);//undefined, the persona array have becomed persona object
console.log(persona.length);//0

//Avoid using new Array(). Use [] instead.
const points = new Array(30,50,100);
console.log(points[2]);
//100
const points2 = [30,50,100];//it is the same as new Array
console.log(points2[2]);
//100

//How to recognize an Array?
//Solution 1: by using Array.isArray() method;
//Solution 2: by using operator instanceof;

console.log(Array.isArray(points));//true
console.log(points instanceof Array);//true

//Changing an array element
const Cars = ["Citroen", "Renault", "Peugeot"];
let x = Cars[2];
console.log(x);
//Peugeot
console.log(Cars);
//["Citroen", "Renault", "Peugeot"]
Cars[0] = "Mazda";
console.log(Cars);
//[ 'Mazda', 'Renault', 'Peugeot' ]
let t = Cars.length;
console.log(Cars.length);//3




