//Comparison and Logical operator are used to test for true and false

let x = 5;

//Equal to
let x1 = x == 8;            //false
let x2 = x == 5;            //true
let x3 = x == "5"           //true
console.log(x1);           
console.log(x2);            
console.log(x3);

//Equal value and equal type
let x4 = x === 8;           //false
let x5 = x === "5";         //false
console.log(x4);
console.log(x5);

//Not equal
let x6 = x != 8;             //true
console.log(x6);

//Not equal value or not equal type
let x7 = x !== 8;       //true
let x8 = x !== 5;       //false
let x9 = x !== "5";     //true
console.log(x7);
console.log(x8);
console.log(x9);


//Greater than and less than
let x10 = x > 8;       //false
let x11 = x < 8;        //true
console.log(x10);
console.log(x11);

//Greater than or equal to
let x12 = x >= 8;       //false
console.log(x12);

//Less than or equal to
let x13 = x <= 8;       //true
console.log(x13);

//Logical And
let y = 7;
let z = 2;
let yz1 = y < 10 && z > 1;      //true
console.log(yz1);

//Logical Or
let yz2 = y == 5 || z == 7;     //false
let yz3 = y == 7 || z == 7;     //true
let yz4 = y == 5 || z == 2;     //true
console.log(yz2);
console.log(yz3);
console.log(yz4);

//Logical Not
let yz5 = !(y == z);            //true
console.log(yz5);

//Canditional (Ternary) Operator
let age = 202;
let voteable = (age < 18) ? "Too young": "Old enough";
console.log(voteable);

//Comparing different types
//When comparing a string with a number, the string will be converted to a number
//An empty string converts to 0.
//A non-numeric string converts to NaN, which always is false
let y1 = 2 < 12;                //true
console.log(y1);
let y2 = 2 < "12";              //true
console.log(y2);
let y3 = 2 < "John";            //false
console.log(y3);
let y4 = 2 > "John";            //false
console.log(y4);
let y5 = 2 == "John";           //false
console.log(y5);
let y6 = "2" < "12";            //false
console.log(y6);
let y7 = "2" > "12";            //true
console.log(y7);
let y8 = "2" == "12";           //false
console.log(y8);

//To secure a proper result, variables should be converted to a proper type first.
age = Number(age);

if (isNaN(age)){
    voteable = "Input is not a number"
}   else {
    votable = (age < 18) ? "Too young" : "Old enough"
}

