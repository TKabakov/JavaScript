//A JS Set is a collection of unique values
//Each value can only occur once in a Set

//Creating Set
//Passing an Array to the new Set() constructor

const letters1 = new Set(["a", "b", "c"]);
//Set(3) { 'a', 'b', 'c' }
console.log(letters1);
console.log(letters1.size);     //3

//Creating Ste and add values:
const letters2 = new Set();
console.log(letters2);      //Set(0) {}

letters2.add("e");
letters2.add("f");
letters2.add("g");
letters2.add("h")

console.log(letters2);
//Set(4) { 'e', 'f', 'g', 'h' }
console.log(letters2.size);
//4

//Create Set and add variables
const letters3 = new Set();

const a = "m";
const b = "n";
const c = "p";
const d = "q";

letters3.add(a);
letters3.add(b);
letters3.add(c);
letters3.add(d);

console.log(letters3);
//Set(4) { 'm', 'n', 'p', 'q' }
console.log(letters3.size);
//4

//The add() Method
console.log(letters2);
//Set(4) { 'e', 'f', 'g', 'h' }
letters2.add("k");
letters2.add("l");
console.log(letters2);
//Set(6) { 'e', 'f', 'g', 'h', 'k', 'l' }

//If you add equal elements, only the first will be saved.
letters2.add("e");
letters2.add("k");
letters2.add("m");
console.log(letters2);
//Set(7) { 'e', 'f', 'g', 'h', 'k', 'l', 'm' }
//Only "m" is added

//The forEach() Method calls a function for each Set element

console.log(letters2);

let txt1 = "";
letters2.forEach(function(value){
    txt1 += value + " ";
})
console.log(txt1);
//e f g h k l m 

//The value() Method returns a new iterator onject containing all the values in the set
console.log(letters2.values());
//[Set Iterator] { 'e', 'f', 'g', 'h', 'k', 'l', 'm' }

//You can use the Iterator object to access the elements.

let txt3 = "";
for(const x of letters2.values()){
    txt3 += x + " ";
}
console.log(txt3);
//e f g h k l m 