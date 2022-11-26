function Icecream (flavor) {
    this.flavor = flavor;
    this.meltIt = function(){
        console.log(`The ${this.flavor} icecream has melted`);
    }
}

let kiwiIcecream = new Icecream ("kiwi");
let appleIcecream = new Icecream ("apple");

console.log(kiwiIcecream);
console.log(appleIcecream);

// Using constructor functions on all built-in objects is sometimes not the best approach.

let apple = new String ("apple");
console.log(apple);//[String: 'apple']

let pear = "pear";
console.log(pear);//pear
//The pear variable, being a primitive value, will always be more performant than the apple variable, which is an object.

//Due to the fact that each object in JavaScript is unique, you can't compare a String object with another String object, 
//even when their values are identical.
console.log(new String("pulm") === new  String("pulm"));//false
console.log("pulm" === "pulm");//true



