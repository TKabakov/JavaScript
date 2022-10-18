if(true){
console.log(true);
}
else{
console.log(false);
} //returns true

if({}){
console.log(true);
}
else{
console.log(false)
} //returns true
if([]){
console.log(true);
}
else{
console.log(false)
}//returns true

if(42){
console.log(true);
}
else{
console.log(false)
}// returns true
if("0"){
console.log(true);
}
else{
console.log(false)
} //returns true
if(0){
console.log(true);
}
else{
console.log(false)
} //returns false
if(""){
console.log(true);
}//returns false
else{
console.log(false)
} // returns false
if(null){
console.log(true);
}
else{
console.log(false)
} //returns false
if(undefined){
console.log(true);
}
else{
console.log(false)
}// returns false
if(NaN){
console.log(true);
}//returns false
else{
console.log(false)
}
/* In logical AND (&&) if the first object is true it returns true*/
if(true && "dog"){
console.log(true);
}
else{
console.log(false)
}//returns dog
if([] && "dog"){
console.log(true);
}
else{
console.log(false)
}
//returns god
/* In logical AND (&&) if first object is falsy, it returns false*/
if(false && "cat"){
    console.log(true);
}
else{
    console.log(false)
}
if(0 && "cat"){
    console.log(true)
}
else{
    console.log(false)
}
  /* If a value is a Boolean value, 
  JavaScript converts it to a number and compares the converted value with the other value; 
  true is converted to 1 and false is converted to 0
  */
if(true > 0){
    console.log(true)
}
else{
console.log(false)
}// returns true

if(false > 0){
    console.log(true)
}
else{
    console.log(false)
}//returns true

if(true > false){
    console.log(true)
}
else{
    console.log(false)
}//returns true
/*
The code is pretty human-readable — it is saying "if the condition returns true, run code A, else run code B"
*/
console.log("You don't have to include the else and the second curly brace block");
if(0){
    console.log(true)
}
console.log(false);
console.log("However, you need to be careful here — in this case, the second block of code is not controlled by the conditional statement");

if(true){
    console.log(true)
}
console.log(false);
