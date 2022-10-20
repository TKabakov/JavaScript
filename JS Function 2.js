function listArrayItems (arr) {
    for( let i = 0; i < arr.length; i ++) {
        console.log(arr[i]);
    }
}
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];

listArrayItems(colors);

//Here are my arr items with a number in front of each item: 
function listArrayItems2 (arr) {
    for( let i = 0; i < arr.length; i++){
        console.log(i,arr[i]);  
    }
}
listArrayItems2(colors);

//To start the count from one instead of zero, I can update my function declaration as follows:  
function listArrayItems3 (arr) {
    for( let i = 0; i < arr.length; i++){
        console.log(i+1,arr[i]);  
    }
}
listArrayItems3(colors);

//I can even add one or more conditions, such as:
function listArrayItems4 (arr){
    for (i = 0; i < arr.length; i++){
        if ( arr[i] == 'red'){
            console.log((i+1)*100,"tomato!")
        } else if (arr[i] == "orange") {
            console.log((i+1)*100, "orange")
        } else {
            console.log((i+1)*100, arr[i])
        }
    }
}

listArrayItems4(colors);

//Found the letter function
function letterFinder (word,match){
    for (let i = 0; i < word.length; i++){
        if( word[i] == match){
            console.log("Found the letter ", match,"at", i);
        }
        else{
            console.log("--No match found at ", i);
        }
    }
}

letterFinder("test","t");

/*
When you pass an array as a parameter, 
if the function changes any of the array's values, 
that change is visible outside the function, 
as shown in the following example:
*/
function myFunc(theArr){
    theArr[0] = 30;
}

const arr = [45];

console.log(arr[0]);//45
myFunc(arr);
console.log(arr[0]);//30

/*
When you pass an object as a parameter, 
if the function changes the object's properties, 
that change is visible outside the function, 
as shown in the following example:
*/
function myFunction(theObject) {
    theObject.make = "Toyota";
    theObject.modle = "Corrola"
}

const myCar = {
    make: "Honda",
    modle: "Accord",
    year : 1998,
};
console.log(myCar);
// x gets the value "Honda"
const x = myCar.make;
console.log(x);
// the make property is changed by the function
myFunction(myCar);
//y gets the value "Toyota"
const y = myCar.make
console.log(y);
const z = myCar.modle;
console.log(z);
console.log(myCar);

/*
Arrow functions allows 
a short syntax for writing function expressions.
You don't need the function keyword, 
the return keyword, 
and the curly brackets.
*/
const l = (n,m) => n*m;
console.log(l(4,5));

/*
You can only omit the return keyword 
and the curly brackets 
if the function is a single statement. 
Because of this, it might be a good habit to 
always keep them:
*/
const s = (n,m) =>{ return n*m };
console.log(s( 4,6));
 
