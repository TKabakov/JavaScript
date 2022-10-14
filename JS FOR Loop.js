console.log("1");
console.log("2");
console.log("3");
console.log("Go");

for (var i = 1; i <= 3; i++) {
    console.log(i)
}
console.log("Go");

for (var i = 10; i > 0; i-- ){
    console.log(i)
}
console.log("Happy New Year!");

var counter = 3;
while (counter > 0){
    console.log(counter);
    counter = counter - 1;
}
console.log("Happy New Year");

const cars = ["BMW", "Volvo","Saab", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++){
    text += cars [i] + " ";
}
console.log(text);

for (let i = 0;i < 5; i++){
    text += "The number is " + i + "  ";
}
console.log(text);

for (let i = 0; i <= 6; i = i + 2){
    text += "The number is " + i + "  ";
}

console.log(text);

//You can initiate many values in expression 1 (separated by comma):
const car = ["BMW", "Volvo", "Saab", "Ford"];
let m;
let len;
let text2;
for (m = 0, len = car.length, text2 = " "; m < len; m ++) {
    text += car[m] + "  ";
}
console.log(text);

const vehicle = ["Tyota", "Citroen", "Audi", "Mercedes"];
let a = 2;
let leng = vehicle.length;
let text3 = " ";

console.log("Initialization is optioanl and can be omited");
for ( ; a < leng; a ++){
    text3 += vehicle[a] + " ";
}
console.log(text3);

let p = 0;
for(; p < 8; p++){
    console.log(p);
}

console.log("Condition block is also optional and can be omited");
for(let t = 0; ; t++){
    console.log(t);
    if ( t > 6) break;
}

console.log("You can also omit all three expressions. Again, make sure to use a break statement to end the loop");
let num = 0;

for( ; ;) {
    if ( num > 4) break;
    console.log(num);
    num++;
}
var k = 5;
for (var k = 0; k < 10 ; k++) {
   console.log(k)// Here is 1,2,3,4,5,6,7,8,9
}
console.log(k);//Here is 10

let l = 5;
for (let l = 0; l < 10; l++) {
    console.log(l);
}
console.log(l);//Here l is 5 

const fruits = ["Apple", "Banana", "Orange"];
for ( x of fruits) {
    console.log(x);
}

