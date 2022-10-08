/*
Task 1: Using the logical && operator

Create a variable named  score and set it to  8

Use console.log() that includes the string "Mid-level skills:" and compares the score variable to above 0 and below 10 using the && operator

The expected output in the console should be: "Mid-level skills: true".
*/
console.log("Task 1:");
var score = 8;
console.log(score>0&&score<10);

/*
Task 2: Using the logical || operator

You need to code a new variable named timeRemaining and set it to 0. You also need to code a new variable named energy and set it to 10.

Next, you should write a piece of code that could be used to determine if the game is over, based on whether either the value of the timeRemaining variable is 0 or the value of the energy variable is 0.

Complete the task using the following steps:

Declare the variable timeRemaining, and assign the value of 0 to it.

Declare the variable energy, and assign the value of 10 to it.

Console log the following parameters: "Game over: ", and timeRemaining == 0 || energy == 0

Note that the expected output in the console should be: "Game over: true".
*/
console.log("Task 2:")
var timeRemaining = 0;
var energy = 10;
console.log("Game over: ", timeRemaining == 0 || energy == 0);

var timeRemaining = 9;
var energy = 0;
console.log("Game over: ",timeRemaining == 0||energy == 0);

var a = 0;
var b = 5;
console.log(a==0);
console.log(b==0);
console.log(a==0||b==0);
console.log(a==0&&b==0);
console.log(a==1||b==1);

/*
Task 3: Using the modulus operator, %, to test if a given number is odd
You need to code a small program that takes a number and determines if it's an even number (like 2, 4, 6, 8, 10).

To achieve this task, you need to declare six variables, as follows:

The first variable, named num1,  should be assigned a number value of 2.

The second variable, named num2, should be assigned a number value of 5.

The third variable, named test1, should be assigned the calculation of num1 % 2. Note: executing this code will return a number.

The fourth variable, named test2, should be assigned the calculation of num2 % 2. Note: executing this code will also return a number.

The fifth variable, named result1, should be assigned the result of comparing if the number stored in the test1 variable is not equal to 0, in other words, this: test1 == 0.

The sixth variable, named result2, should be assigned the result of comparing if the number stored in the test2 variable is not equal to 0, in other words, test2 == 0.
*/
console.log("Task 3:")
var num1 = 4;
var num2 = 7;
var test1= num1%2;
var test2= num2%2;
var result1= test1==0;
var result2= test2==0;
console.log("Is", num1, "an even number?", result1);
console.log("Is", num2, "an even number?", result2);

var num1 = 5;
var num2 = 8;
var test1= num1%2;
var test2= num2%2;
var result1= test1==0;
var result2= test2==0;
console.log("Is", num1, "an even number?", result1);
console.log("Is", num2, "an even number?", result2);

/*
Task 4: Add numbers using the + operator

Console log the result of adding two numbers, 5 and 10, using the + operator.
*/
console.log("Task 4: Add numbers using the + operator");
console.log(5+10);
