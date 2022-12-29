//You can use the "typeof" operator to find the data type of a JS variable:
console.log(typeof("John"));        //string
console.log(typeof(3.14));          //number
console.log(typeof(NaN));           //number
console.log(typeof(false));         //boolean
console.log(typeof[1, 2, 3, 4]);     //object
console.log(typeof({name:'John', age: 34}))//object
console.log(typeof new Date());     //object
console.log(typeof function(){});   //function
var myCar;
console.log(myCar);                 //undefind
console.log(typeof null);           //object

//You cannot use typeof to determine if a JS object is an array or date (because they both a re objects).

//Complex Data
//The typeof operator can return one of the two complex types: function or object.

//The typeof is an operator and always returns a string.

//The constructor property
console.log("John".constructor);        //[Function: String]
console.log((3.14).constructor);        //[Function: Number]
console.log(false.constructor);         //[Function: Boolean]
console.log([1, 2, 3, 4].constructor);  //[Function: Array]
console.log({name:"John", age:34}.constructor);//[Function: Object]
console.log(new Date().constructor);    //[Function: Date]
console.log(function(){}.constructor);  //[Function: Function]

//You can check the constructor property to find out if an object is an Array(consatins word "Array"):
const fruits = ["Banana", "Orange", "Apple"];
console.log(isArray(fruits));           //true

function isArray(myArray){
    return myArray.constructor.toString().indexOf("Array") > -1
}

//Even simplier, you can chack if the object is an Array function
console.log(isArray2(fruits));          //true
function isArray2(myArray){
    return myArray.constructor === Array;
}

const myDate = new Date();              //true
console.log(isDate(myDate));
function isDate(myDate){
    return myDate.constructor.toString().indexOf("Date") > -1;
}

//Or even simpler, you can chack if the object is a Date function:
console.log(isDate2(myDate));           //true
function isDate2(myDate){
    return myDate.constructor === Date;
}

console.log(myDate);
console.log(myDate.constructor);        //[Function: Date]
console.log(myDate.constructor.toString());//function Date() { [native code] }
console.log(myDate.constructor.toString().indexOf("Date"));//9

//Undefined
//A variable without a value has the value undefined:
let car;
console.log(typeof(car));               //undefined
//Any variable can be emptied, by setting value to undefined.
car = "Toyota";
console.log(car, " ", typeof(car));      //Toyota   string
car = undefined;
console.log(car, " ", typeof(car));       //undefined   undefined

//Empty Value
//An empty string has both a legal value and a type
let car2 = "";
console.log("The value is: ", car2, "The type of car2 is: ", typeof(car2));
//The value is:   The type of car2 is:  string

//Null
//"null" is nothing, but its typeof is an object.
//An object can be emptied by setting it to "null" or by seting it to "undefined".

let person = {firstName:"John", lastName:"Doe", age: 50, eyeColor:"blue"};
console.log(person);
//{ firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue' }
person = null;
console.log(person);            //null

let person2 = {firstName:"John", lastName:"Doe", age: 50, eyeColor:"blue"};
console.log(person2);
//{ firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue' }
person = undefined;
console.log(person);            //undefined

//Undefined and null are equal in value but different in type:
console.log(typeof(undefined)); //undefined
console.log(typeof(null));      //object

console.log(null == undefined);//true
console.log(null === undefined);//false

const { test } = require("picomatch");

//The instanceof Operator
const cars = ["Saab", "Volvo", "BMW"];

console.log(cars instanceof (String));      //false
console.log(cars instanceof (Number));      //false
console.log(cars instanceof (Array));       //true
console.log(cars instanceof (Object));      //true

//The void operator evaluates an expression and then returns "undefined":

const output = void 1;
console.log(output);                        //undefined

void console.log("expression evaluated");   //expression evaluated

void function iife(){
    console.log("iife is executed");
}();                                        //iife is executed

void function test(){
    console.log("test is executed");
};
try {
    test();
} catch (e){
    console.log("test function is not defined");
}
//test function is not defined


