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

do {
    text += "The number is " + i + ".";
    i++;
}
while ( i< 8);
console.log(text);
/*
 The number is 0.The number is 1.The number is 2.
 The number is 3.The number is 4.The number is 5.
 The number is 6.The number is 7.
*/;

let m = 0;
do {
    text += ".  The number is " + m;
    m++;
}
while ( m < 2);
console.log(text);
let l = 0
let text2 = "";
const cars = ["BMW", "Volvo", "Saab", "Ford"];

for( ; cars[l]; ) {
    text2 += cars[l]+ "  ";
    l++;
}
console.log(text2);

let k = 0;
let text3 = "";
while (cars[k]){
    text3 += cars[k] + " ";
    k++;
}
console.log(text3);
