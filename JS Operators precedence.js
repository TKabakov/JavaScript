console.log(3+4*5);//23

console.log(4*3**2);//36

let a;
let b;
console.log(a=b=5);//5

console.log(3+10*2);//23
console.log(3+(10*2));//23
console.log((3+10)*2);//26

console.log(a=b=5);//5
console.log(b=5);//5
console.log(a=b);//5

console.log(4**3**2);//same as 4**(3**2)
console.log(4/3/2);//smae as (4/3)/2
console.log(2**3/3**2);//same as (2**3)/(3**2)

const c = 3;
const d = 5;
console.log(typeof c + d); //equivalent to (typeof 3) + 5; the result is "number5"

function A(){ console.log("called A"); return false};
function B(){ console.log("called B"); return false};
function C(){ console.log("called C"); return true};

console.log(C() || B() && A());//called C true

console.log(A()&& C() || B());//called A called B false
