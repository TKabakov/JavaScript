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
const fruits = [ " Bananas", " Orange", " Mango", " Apple" ]
console.log(fruits.lenght);
let first = fruits[0];
console.log(first);

let fruit = fruits[fruits.lenght-1];
console.log(fruit);