//In ES5 and earlier the only way to build strings was to use quates(single or double).
'Hello, World!'
"Hello, World!"
//In ES6 using the backticks builds strings.
//`Hello, World!`
//This is known as a templete string or a templetae literal.

//A template string allowes variable interpolation.
let greet = "Hello";
let place = "World";
console.log(`${greet}, ${place} !`);
//Hello, World !
place = "Bulgaria";
console.log(`${greet}, ${place} !`);
//Hello, Bulgaria !
//In ES5, this can be done only with use of + operator
console.log(greet + ", " + place + " !");
//Hello, Bulgaria !

//a template string can span multiple lines.
`Hello,
World
!
`

//A template literals allow expression evaluation.
console.log(`${1+1+1+1+1} stars!`);
//5 stars!
