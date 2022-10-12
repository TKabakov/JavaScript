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
const date = new Date()
console.log(date);
console.log(new Date());

console.log("Postfix Increment");
console.log("If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.");
var a = 8;
var b = a++;
console.log(b);
console.log(a++);
console.log(a);

let m = 3;
const n = m++;
console.log(m);//m = 4
console.log(n)//n = 3;

console.log("If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.");
var j = 8
var f = ++j;
console.log(f);//f = j+1 = j = 9;
console.log(j);//j = 9;

console.log("Postfix Decrement");
var c = 8;
var d = c--;
console.log(c);
console.log(d);

console.log("The ! Operator (Logical NOT)");
console.log(5==8);
console.log(!(5==8));

console.log("The Shift Operator <<, >>, >>>");
console.log(5<<2);
console.log(-5>>1);
console.log(5>>1);
console.log(5>>>1);











