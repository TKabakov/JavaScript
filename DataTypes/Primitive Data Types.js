console.log("Checking numbers:");
console.log("10:", typeof(10));
//10: number

console.log("9007199254740992n: ", typeof(9007199254740992n));
//9007199254740992n:  bigint

console.log("Checking booleans:");
console.log("3 == 5: ", typeof(3 == 5));
//3 == 5:  boolean

console.log("12 == '12': ", typeof(12 == '12'));
//12 == '12':  boolean

console.log("Checking strings:");

console.log("DataFlair: ", typeof("DataFlair: "));
//DataFlair:  string

console.log("Checking undefined: ");
var myVariable;
console.log("myVariable: ", myVariable );
//myVariable:  undefined

console.log("Checking symbols: ");
const symbol1 = Symbol();
console.log("symbol1: ", typeof(symbol1));
//symbol1:  symbol

const symbol2 = Symbol(5);
console.log("symbol2: ", typeof(symbol2));
//symbol2:  symbol

console.log("Checking objects and functions:");
var name1 = null;
console.log("name1: ", typeof(name1));
//name1:  object

var object1 = {};
console.log("object1: " + typeof(object1));
//object1: object

var array1 = [];
console.log("array1: ", typeof(array1));
//array1:  object

function myFunction(){};
console.log("myFunction():", typeof(myFunction));
//myFunction(): function

