function myFunction1 (){
    console.log ("Hello World!");
}

myFunction1();

function myFuction (p1,p2) {
    return p1 * p2;
} 

function addTwoNums () {
    var a = 10;
    var b = 20;
    var c = a + b;

    console.log(c);
}

addTwoNums();

function addNums(x,y) {
    var z = x + y;

    console.log(z);
}

addNums(2,2);
addNums(3,4);

function celsiusToFahrenheit (f){
    return (5/9)*(f-32);
}
var temp = 55;
    console.log(celToFar(temp));

/*Accessing a function without () will return the function definition instead of the function result:*/
function celToFar (f){
    return (5/9)*(f-32);
}
var temp = 75;
    console.log(celToFar);


console.log("The temperature is " + celToFar(temp) + " Celsius");

/*
Variables declared within a JavaScript function, become LOCAL to the function.

Local variables can only be accessed from within the function.
*/
console.log(typeof carName);//carName CANNOT be use here

function myFunc (){
    let carName = "Volvo";
    console.log (typeof carName + " " + carName);//carName CAN be use here
}

    
    console.log(myFunc());
    console.log(typeof carName);//carName CANNOT be use here

function myFunction() {
    console.log ("Hello World!")
}
myFunction();

/*A function can be stored in a variable.
*/
/*
After a function has been stored in a variable,
the variable can be used as a function:
*/
const x = function ( a, b) {
    return a * b
};
console.log(x(4,6));
/*
Functions can also be defined with a built-in JavaScript function constructor called Function()
*/
const buildInFunction = new Function ( "a", "b", "return a*b");
console.log(buildInFunction(3,6));
//This is the same as:
const buildIn = function ( a, b) {
    return a * b
}
console.log(buildIn(3,5));
//JavaScript function can be called before they are declared (they are hoisted the same as variables)

console.log(hoistingFunction(5));

function hoistingFunction (m) {
    return m * m;
}
/*
Functions can be invoked automatically without being called:
*/
(function(){
    console.log("Hello! I called myself");
})();

/*
Functions Can Be Used as Values
*/

function functionAsValue ( a, b){
    return a * b;
}
let v = functionAsValue (3,7);
console.log(v);
/*
JavaScript functions can be used in expressions:
*/
function expression (a , b) {
    return a * b;
}
let e = expression (4, 8)*2 + 10;
console.log (e);

/*
The arguments.length property returns the number of arguments received by the function:
*/

function arguments (a, b, c) {
    return arguments.length;
}
console.log( arguments(4, 5, 6));

/*
The toString() method returns the function as a string:
*/
function string (a, b) {
    return a * b;
}
let text = string.toString()
console.log(text);
console.log(string);
/*
With arrow functions, you don't have to type the function keyword, the return keyword, and the curly brackets.
*/
const l = (s, p) => s/p;
console.log(l(6,3));
//Be careful - Arrow functions are not hoisted. They must be defined before they are used.
/*
You can only omit the return keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always keep them:
*/
const f = (l, m) => { return l/m };
console.log(f(8,2));
