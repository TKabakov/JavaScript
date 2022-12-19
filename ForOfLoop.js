//For of statement loops through the values of an iterable object.
//Iterable objects are structures as Arrays, Strings, Maps, NodeLists and more.

const cars = ["BMW", "Volvo", "Fiat", "Mini"];

let txt1 = "";
for(let i of cars){
    txt1+= i + " ";
    console.log(i)
}
/*
BMW
Volvo
Fiat
Mini
*/

console.log(txt1, " ");     //BMW Volvo Fiat Mini 

//Looping over a string
let lang = "JavaScript";

let txt2 = "";
for (i of lang){
    txt2 += i + " ";
    console.log(i)

}
/*
J
a
v
a
S
c
r
i
p
t
*/
console.log(txt2);      //J a v a S c r i p t 