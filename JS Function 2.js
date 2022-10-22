function listArrayItems (arr) {
    for( let i = 0; i < arr.length; i ++) {
        console.log(arr[i]);
    }
}
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
/*red
orange
yellow
green
blue
purple
pink*/

listArrayItems(colors);

//Here are my arr items with a number in front of each item: 
function listArrayItems2 (arr) {
    for( let i = 0; i < arr.length; i++){
        console.log(i,arr[i]);  
    }
}
listArrayItems2(colors);
/*0 red
1 orange
2 yellow
3 green
4 blue
5 purple
6 pink
*/

//To start the count from one instead of zero, I can update my function declaration as follows:  
function listArrayItems3 (arr) {
    for( let i = 0; i < arr.length; i++){
        console.log(i+1,arr[i]);  
    }
}
listArrayItems3(colors);
/*1 red
2 orange
3 yellow
4 green
5 blue
6 purple
7 pink
*/

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
/*
100 tomato!
200 orange
300 yellow
400 green
500 blue
600 purple
700 pink
*/

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
/*Found the letter  t at 0
--No match found at  1
--No match found at  2
Found the letter  t at 3 */

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
    theObject.model = "Corrola"
}

const myCar = {
    make: "Honda",
    model: "Accord",
    year : 1998,
};
console.log(myCar);//{ make: 'Honda', model: 'Accord', year: 1998 }
const x = myCar.make;// x gets the value "Honda"
console.log(x);//Honda
myFunction(myCar);//myFunction is invoke and theObject.make gets value "Toyota" and theObject.model gets value "Corrola" 
const y = myCar.make//y gets the value "Toyota"
console.log(y);//Toyota
const z = myCar.model;//z gets the value "Corrola
console.log(z);//Corrola
console.log(myCar);//{ make: 'Toyota', modle: 'Corrola', year: 1998 }

/*
Arrow functions allows 
a short syntax for writing function expressions.
You don't need the function keyword, 
the return keyword, 
and the curly brackets.
*/
const l = (n,m) => n*m;
console.log(l(4,5));//20

/*
You can only omit the return keyword 
and the curly brackets 
if the function is a single statement. 
Because of this, it might be a good habit to 
always keep them:
*/
const s = (n,m) =>{ return n*m };
console.log(s( 4,6));//24
 
