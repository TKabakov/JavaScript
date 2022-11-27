/*
In functional programming (FP), we use a lot of functions and variables.
*/
function getTotal(a, b) {
    return a + b
}

var num1 = 3;
var num2 = 4;

var total = getTotal(num1,num2);
console.log(total);

/*
When writing FP code, we keep data and functionality 
separate and pass data into functions only when we want something computed.
*/
function getDistance (kmh, h) {
    return kmh * h
}

var kmh = 60;
var h = 2;
var distance = getDistance(kmh, h);

/*
In functional programming, functions return new values and 
then use those values somewhere else in the code.
*/

console.log(distance);//<===== THIS IS HERE!

/*
In object-oriented programming (OOP) we group data and functionality as properties and methods 
inside objects.
*/
var virtu
alPet = {
    sleepy: true,
    nap: function(){
        this.sleepy = false
    }
}

console.log(virtualPet.sleepy);//true

virtualPet.nap();
console.log(virtualPet.sleepy);//false




