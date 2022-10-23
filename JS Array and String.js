//for loop over an array
let letters = [ 'a', 'b', 'c'];

for (let i = 0; i < letters.length; i++){
    console.log(letters[i]);
}
/*
a
b
c
*/

//for loop over a string
let letters2 = "abc";
for (let i = 0; i < letters2.length; i++){
    console.log(letters[i]);
}
/*the same result
a
b
c
*/

let veggies = ['onion', 'parcley', 'carrot'];

console.log(veggies.length);//3
console.log(veggies[0]);//onion
console.log(veggies[1]);//parcley

for( let i = 0; i < veggies.length; i++){
    console.log(veggies[i]);
}
/*
onion
parcley
carrot
*/

let greetings = "Howdy";

console.log(greetings.length);//5

for( let i = 0; i < greetings.length; i++){
    console.log(greetings[i]);
}
/*
H
o
w
d
y
*/

let greet = "Hello, ";
let user = "Lisa";
/*
I can confirm that the plus operator here, 
when used on strings, acts as a concatenation operator,
meaning it join strings together.
*/
console.log(greet + user);//Hello Lisa
console.log(greet.concat(user));//Hello Lisa

let place = "World";

console.log(greet.length);/6/

/*
To read each individual character at a specific index in a string, 
starting from zero, I can use the charAt() method
*/
console.log(greet.charAt(0));//H
console.log(greet.charAt(1));//e

/*
The concat() method joins two strings.
*/
console.log("Wo".concat("rl").concat("d"));//World

/*
The indexOf returns the location of the First position that matches a character.
*/
console.log("ho-ho-ho".indexOf("h"));//0
console.log("ho-ho-ho".indexOf("o"));//1
console.log("ho-ho-ho".indexOf("-"));//2

/*
The lastIndexOf finds the last match, otherwise it works the same as indexOf.
*/

console.log("ho-ho-ho".split("-"));//[ 'ho', 'ho', 'ho' ]
console.log("ho-ho-ho".split("o"));//[ 'h', '-h', '-h', '' ]

console.log(greet.toUpperCase());//HELLO,
console.log(greet.toLowerCase());//hello,

let clothes = [];

clothes.push("jeans");//Adds 1st item of clothing
clothes.push("jacket");//Add 2nd item of clothing
clothes.push( "tie");//Add 3rd item of clothing
clothes.push("shoes");//Add 4th item of clothing
clothes.push("shirt");//Add 5th item of clothing

console.log(clothes);//[ 'jeans', 'jacket', 'tie', 'shoes', 'shirt' ]

clothes.pop();
console.log(clothes);//[ 'jeans', 'jacket', 'tie', 'shoes' ], no "shirt"

clothes.push("hat");
console.log(clothes);//[ 'jeans', 'jacket', 'tie', 'shoes', 'hat' ]

console.log(clothes[2]);//tie

let fevCar = {};
fevCar.color = "blue";
fevCar.covertible = true;
console.log(fevCar);



