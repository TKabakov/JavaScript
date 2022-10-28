let text = " ";
let i = 0;
while (i<6){
    text += "The number is " + i + ".";
    i++;
}
console.log(text);
/*
The number is 0.The number is 1.The number is 2.
The number is 3.The number is 4.The number is 5.
*/

let text2 = "";
let j = 0;
do {
    text2 += "The number is " + j + ".";
    j++;
}
while ( j< 8);
console.log(text2);
/*
 The number is 0.The number is 1.The number is 2.
 The number is 3.The number is 4.The number is 5.
 The number is 6.The number is 7.
*/
let text3 = "";
let m = 0;
do {
    text3 += "The number is " + m + ".";
    m++;
}
while ( m < 2);
console.log(text3);
/*
The number is 0.The number is 1.
*/

let l = 0
let text4 = "";
const cars = ["BMW", "Volvo", "Saab", "Ford"];

for( ; cars[l]; ) {
    text4 += cars[l]+ "  ";
    l++;
}
console.log(text4);
/*
BMW  Volvo  Saab  Ford 
*/

let k = 0;
let text5 = "";
while (cars[k]){
    text5 += cars[k] + " ";
    k++;
}
console.log(text5);
/*
BMW Volvo Saab Ford
*/
