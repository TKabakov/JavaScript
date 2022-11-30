//Operator Prededence
//Multiplication has precedence over addition
//But paranthesis has precedence over multiplication.
console.log((100+20)*3);//360

console.log("The . Operator(Member of)");
const car = {type:"Toyota",model:"Avensis", color:"silver", millage:155000 };
console.log(car.type);//Toyota
console.log(car.model,car.color, car.millage);//Avensis silver 155000

console.log(car["type"], car["model"]);//Toyota Avensis

//Using new Date() without arguments, creates a date object with the current date and time:
const date1 = new Date()
console.log(date1);//2022-11-29T17:07:22.194Z
console.log(new Date());//2022-11-29T17:07:22.198Z

//Postfix Increment
//If used postfix, with operator after operand (for example, x++), 
//the increment operator increments and returns the value before incrementing.
var a = 8;
var b = a++;
console.log(b);//8
console.log(a++);//9
console.log(a);//10

let m = 3;
const n = m++;
console.log(m);//m = 4
console.log(n)//n = 3;

//If used prefix, with operator before operand (for example, ++x), 
//the increment operator increments and returns the value after incrementing.
var j = 8
var f = ++j;
console.log(f);//f = j+1 = j = 9;
console.log(j);//j = 9;

Postfix Decrement
var c = 8;
var d = c--;
console.log(c);//7
console.log(d);//8

//The ! Operator (Logical NOT)
console.log(5==8);//false
console.log(!(5==8));//true

console.log("The Shift Operator <<, >>, >>>");
console.log(5<<2);//20
console.log(-5>>1);//-3
console.log(5>>1);//2
console.log(5>>>1);//2











