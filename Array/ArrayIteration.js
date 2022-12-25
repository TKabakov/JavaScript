//forEach()
//The forEach() method calls a function (a callback function) once for each array element.

const numbers = [ 45, 4, 9, 16, 25];
let txt = " ";
numbers.forEach(myFunction);

function myFunction(value, index, array){
    txt += value + " "
}

console.log(txt);
// 45 4 9 16 25

//Array.map()
//The map() methods creates a new array by performing a function on each array element
//The map() method does not exclude the function for array elemnt without values.
//The map() method not change the original array.

const numbers2 = numbers.map(myFunction2);

function myFunction2 (value, index, array){
    return value * 2;
}

console.log(numbers2);
//[ 90, 8, 18, 32, 50 ]

//Array.filter()
//The filter method creates a new array with array element that pass a test.

const over18 = numbers.filter(myFunction3);
const over18_ = numbers2.filter(myFunction3);
function myFunction3(value, index, array){
    return value > 18;
}

console.log(over18);
//[ 45, 25 ]
console.log(over18_);
//[ 90, 32, 50 ]

//Array.reduce()
//The reduce() method runs a function on each element to produce(reduce it) to a single value.
//The reduce() works from left-to-right.
//The reduce() method does not reduce the riginal array.

let sum = numbers.reduce(myFunction4);
let power = numbers.reduce(myFunction5);

function myFunction4(total, value, index, array){
    return total + value;
}

console.log("The sum is: "+ sum);       //99

function myFunction5(total, value, index, array){
    return total * value
}
console.log(power);       //648000

//You can use accumulator instead total, currantValue, istead value, currentIndex instead Index, arr instead array.
//You can use initialValue parameter.

let sum5 = numbers.reduce(myFunction4, 100);

console.log("The sum is: ", sum5);      //199

let sumRight = numbers.reduceRight(myFunction4);

console.log("The sum is : ",sumRight);       //99

//every()
//The every() method checks if ALL array element pass a test.
//The every() method returns true or false.

let allOver18 = numbers.every(myFunction61);

function myFunction61(value, index, array){
    return value > 18;
}

console.log(allOver18);     //false

//some()
//The some() method checks if SOME array element pass a test.
//The some() method returns true or false.

let someOver18 = numbers.some(myFunction6);

function myFunction6(value, index, array){
    return value > 18;
}

console.log(someOver18);

//idexOf()
//The indexOf() method searches an array for an element value and returns its position.

const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1;
console.log("Apple is found in position " + position);

//lastIndexOf()
let position2 = fruits.lastIndexOf("Apple") + 1;

console.log("Apple is found in position " + position2);         //3

//find ()
//The find() methods returns the value of the first array element that passes a test function.

let first = numbers.find(myFunction7);

function myFunction7(value, index, array){
    return value > 18;
}
console.log(first);     //45

//findIndex()
//findIndex() method returns the index of the first array element that passes a test.

let findFirst = numbers.findIndex(myFunction8);

function myFunction8(value, index, array){
    return value > 18
}

console.log("The first element over 18 has index: ", findFirst);
//The first element over 18 has index:  0

//Array.from()
//The Array.from() methods returns an Array object from any with length property or any iterable object.

const myArr = Array.from("ABCDEFG");
console.log(myArr);
/*
[
  'A', 'B', 'C',
  'D', 'E', 'F',
  'G'
]
*/

//Array.keys()
//Array.keys()method returns an Array Interator object with the keys of an array.

const keys = fruits.keys();
let txt3 = "";

for (let x of keys){
    txt3 += x + " ";
}

console.log(txt3);
//0 1 2 3 

//Arry.entries()
//Array.entries() method returns an Array Iterator object with key/value pairs.

const f = fruits.entries();
let txt4 = "";
for(x of f){;
    txt4 += x + " " ;

}
console.log(txt4);
//0,Apple 1,Orange 2,Apple 3,Mango

//Array.includes()
//Array.includes() checks if an element is present in the array.

let check = fruits.includes("Mango");

console.log(check);     //true

