//Nullish Coalescing Operator (??)
//The ?? operator returns the first argument if it is not nullish (null or undefined).
//Otherwise it returns the second argument
let name = null;
let txt = "missing";
let result = name ?? txt;
console.log("The name is " + result);


//Optional Changing Operator
//?. operator returns undefined if an object is undefined or null(instead of throwing an error). 
const car = {type:"Fiat", model:"500", color:"white"};
let name1 = car?.name1;
console.log(name1);      //undefined

const cars = ["Volvo", "BMW", "Audi"];

for( let x in cars){
    console.log(x)
}

for(let y of cars){
    console.log(y)
}