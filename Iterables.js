//Iterables are iterable ojects (like Arrays)
//Iterables can be iterated over with for..of loops

const name = "W3Schools";

let txt1 = "";

for(const x of name){
    txt1 += x + " ";
}
console.log(txt1);
//W 3 S c h o o l s

//Iterating over an Array
const letters = [ "a", "b", "c", "d"];
let txt2 = "";
for(const x of letters){
    txt2 += x + " ";
}

console.log(txt2);
//a b c d 

//Iterating over a Set
const letters2 = new Set(["a", "b", "c", "d", "e"]);
let txt3 = "";

for(const x of letters2){
    txt3 += x + " ";
}
console.log(txt3);
//a b c d e 

//Iterating over a Map with for..of loop
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["orange", 200]
]);
let txt4 = "";

for(const x of fruits){
    txt4 += x + " ";
}
console.log(txt4);
//apples,500 bananas,300 orange,200 

