//Converting Strings to Numbers
let n1 = Number("3.14");
let n2 = Number(Math.PI);
let n3 = Number("");
let n4 = Number(" ");
console.log(n1);                //3.14
console.log(n2);                //3.141592653589793
console.log(n3);                //0
console.log(n4);                //0

let n5 = Number("99 88");
let n6 = Number("John");
console.log(n5);                //NaN
console.log(n6);                //NaN

//The unary + Operator
//The unary + operator can be used to convert a variable to a number:
let x = "5";
console.log(typeof(x));         //string
let y = + x;
console.log(typeof(y));         //number

let x1 = "John";
console.log(typeof(x1));         //string
let y1 = + x1;
console.log(typeof(y1));         //number

//Converting Numbers to Strings
//global String() method
let x2  = 123
console.log(String(x2));        //123
console.log(String(123));       //123
console.log(String(100 + 23));  //123

//toString() method
console.log(x2.toString());      //123
console.log((123).toString());   //123
console.log((100+23).toString());//123

//Converting Dates to Numbers
//It can be done by Number() method or getTime() method
let d = new Date ();
let d1 = Number(d);
console.log(d1);                //1672335670256

let d2 = d.getTime();
console.log(d2);                //1672335670256

//Converting Dates to Strings
//It can be done by String() method or by toString() method:

let s1 = String(d);             //Thu Dec 29 2022 19:47:23 GMT+0200 (Източноевропейско стандартно време)
console.log(s1);

let s2 = d.toString();
console.log(s2);                //Thu Dec 29 2022 19:47:23 GMT+0200 (Източноевропейско стандартно време)

//Converting Boolean to Numbers
let b1 = Number(false);
let b2 = Number(true);

console.log(b1);                //0
console.log(b2);                //1

let b3 = Number ("5" == 5);
let b4 = Number ("5" === 5);
console.log(b3);                //1
console.log(b4);                //0

//Converting Boolean to String
//Can be done by String() method or by toString() method:
let s3 = String(false);
let s4 = String(true);

console.log(s3);                //false
console.log(s4);                //true

let s5 = false.toString();
let s6 = true.toString();

console.log(s5);                //false
console.log(s6);                //true








