//Syntax x+=y is the same as x = x + y
let a = 3;
let b = "hello";

let c = a += 4;
console.log(c);//7

let d = b += " world";
console.log(d);//hello world

let baz = true;

let m = baz += 3;////Number + Boolean -> addition
console.log(m);//4

let l = baz += false;//Number + Boolean -> addition
console.log(l);//4

let foo = "foo";
//String + Boolean -> concatination

console.log(foo += false);//foofalse

let foo2 = foo += false;//'foofalse' becomes 'foofalsefalsefalse'

console.log(foo += false);//foofalsefalsefalse
//String + String -> concatination
console.log(foo += " bar");//foofalsefalsefalse bar

let bar = 5;

console.log(bar += 2);//7 - Number + Number -> addition


let n = 1;
let text = "";
while( n < 6) {
    n++;
    text += n;
    
}
console.log(text);
console.log("Counting completed!");

let text2 = "";
for(p = 1; p < 6; p++){
    text2 += p
}
console.log(text2);

let s = 5;
let text3 = ""
while ( s > 0 ){
    text3 += s;
    s--;
}
console.log(text3);
console.log("Countdown finished!");
