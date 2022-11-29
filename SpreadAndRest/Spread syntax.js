function sum(x, y, z) {
    return x + y + z 
}
const numbers = [1, 2, 3];

console.log(sum(...numbers));//6

console.log(sum.apply(null, numbers));//6

// It is common to use Function.prototypr.apply() 
//to use the element of an array as argument to a function
function myFunction (x, y, z) {
    return x + y + z
}

const args = [0, 1, 2];

let func = myFunction.apply(null, args);

console.log(func);//3

//With spread syntax the above can be written as:
 let spread = myFunction(...args);
 console.log(spread);//3

//Any argument can use pread syntax
//The spread can be used multiple times.



function myFunc(v, w, x, y, z){
    return v + w + x + y + z
}

const arguments = [0, 1];

let func2 = myFunc(-1, ...arguments, 2, ...[3]);

console.log(func2);//5

//Spread can be used to copy an array
const arr = [1, 2, 3];
const arr2 = [...arr];
arr2.push(4);
console.log(arr);//[ 1, 2, 3 ]
console.log(arr2);//[ 1, 2, 3, 4 ]

//Array.prototype.conscat() is ofen used to cancatinate 
//an array at the end of an exesting array. 

let arr3 = [0, 1, 2];
const arr4 = [3, 4, 5];
arr3 = arr3.concat(arr4);
console.log(arr3);
//[ 0, 1, 2, 3, 4, 5 ];

//With spread syntax this becomes:
let arr03 = [0, 1, 2];
const arr04 = [3, 4, 5];

arr03 = [...arr03,...arr04];
console.log(arr03);
//[ 0, 1, 2, 3, 4, 5 ]

//Array.prototype.unshift() is often used to insert 
//an array of vallues at the start of an existing array.
const arr5 = [0, 1, 2];
const arr6 = [3, 4, 5];

Array.prototype.unshift.apply(arr5, arr6);
console.log(arr5);
//[ 3, 4, 5, 0, 1, 2 ]

//The same can be done with spread sytax:
let arr05 = [0, 1, 2];
const arr06 = [3, 4, 5];
arr05 = [...arr06, ...arr05];
console.log(arr05);
//[ 3, 4, 5, 0, 1, 2 ]

