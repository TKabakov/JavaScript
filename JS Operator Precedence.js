console.log("Operator Prededence");
console.log("Multiplication has precedence over addition.");
console.log("But paranthesis has precedence over multiplication.");
console.log((100+20)*3);

console.log("The . Operator(Member of)");
const car = {type:"Toyota",model:"Avensis", color:"silver", millage:155000 };
console.log(car.type);
console.log(car.model,car.color, car.millage);

console.log(car["type"], car["model"]);

console.log("Using new Date() without arguments, creates a date object with the current date and time:");
const date1 = new Date()
console.log(date1);
console.log(new Date());

console.log("Postfix Increment");
var a = 8;
var b = a++;
console.log(b);
console.log(a++);
console.log(a);

console.log("Postfix Decrement");
var c = 8;
var d = c--;
console.log(c);
console.log(d);

var j = 8
var f = ++j;
console.log(f);
console.log(j);

console.log("The ! Operator (Logical NOT)");
console.log(5==8);
console.log(!(5==8));

console.log("The Shift Operator <<, >>, >>>");
console.log(5<<2);
console.log(-5>>1);
console.log(5>>1);
console.log(5>>>1);











