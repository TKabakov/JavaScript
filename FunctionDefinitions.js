//A function expression can be stored in a variable:
const x = function (a, b){return a * b};
let z = x (4, 3);
console.log(z);             //12
//FUnctions stored in a variable don't need a name (anonymus functions).
//When an anonymus function is called it's called using the name of the variable.

//The Function() Constructor
//Functions can be defined with a built-in JavaScript function construcor Function() (with new keyward).
const func = new Function("a", "b", "return a * b");
let f = func( 4, 3);
console.log(f);             //12
//You actually don't have to use the function constructor.
//Most of the time, you can avoid using the new keyward.

//Housting
//Function declarations like variable declarations can be hoisted.
//Because of this, functions can be called before they are declared.
console.log(myFunc (5));    //25

function myFunc(y){
    return y * y;
}

//Self-Invoking Functions
//A self-invoking expression is inviked(started) autimatically without being called.
//To start automatically an expression must be fallowed by ().
//You have to add parentheses around the function to indicate that is is function expression.
(function(){
    console.log("Hello! I called myself");
}) ();          //Hello! I called myself

//Functions Can Be used as Values
function myFunction(a, b){
    return a * b;
}

let m = myFunction(4, 5) * 2;
console.log(m);                 //40

//Function as a Object
//Functions have both properties and methods.
//The argument.length retuns the number of argumens recieved by the function.
//Th toString() method returns the function as a string.
function arguments(a, b){
    return arguments.length;
}

console.log(arguments(4, 5));   //2

let txt = arguments.toString();
console.log(txt);
/*
function arguments(a, b){
    return arguments.length;
}
*/

//A function designed to create new object, is called an onject constructor.
//A function defined as the propery of an object, is called a method to the object.

//Arrow functions
//In arrow function you can omit the "function" keyword, the "return" keyword and the curly brackets.
var multiply = function(a, b){
    return a * b;
}

const multi = (a, b)=> a * b;
console.log("The result of multiply function is : ", multiply(3, 6));
console.log("The result of multi function is : ", multi(3,6));
//The result of multiply function is :  18
//The result of multi function is :  18

//Arrow functions don't havetheir own this.
//Arrow functions are not hoisted and because of this they have to be declared before they to be used.
//Using const is safer than using var.
//You can only mit the return keyword and the curly backets if the function is a single statement.It's good habit always to keep them.

