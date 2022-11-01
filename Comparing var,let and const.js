//var keyword

//1. Var variable can be accessed before initialization ...
console.log(user);//Reference Error
var user;//returns "undefined"

//2. We can declare and rediclare the var variables without errors
var user = "Mary";
var user = "Joanna";
var user = "Mark";

console.log(user);

//let variable
//1. let variable CANNOT be accessed befor it is declared
//console.log(user1);//Reference Error
//let user1;//Reference Error
//2.We CAN declare an unassigned variable with let
let user2;
console.log(user2);//undefined, NO errors
//3.We CANNOT redeclare a let variable
//let user2 = "Anna";//SyntaxError
//4.We CAN re-asign a let variable
user2 = "Anna";
user2 = "Tom";
console.log(user2);//Tom

//const variable
//1. const variable MUST BE initialized
console.log(user3);//SyntaxError
const user3; 
//2. const variable CANNOT be accessed before initialization
console.log(use4);//ReferanceError
const user4 = "Andrew";
//3. We CANNOT redeclare a const variable
user4 = "Anna";//TypeError
