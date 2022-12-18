// getFullYear() returns the year of a date as four digit number:
const d1 = new Date ("2021-03-25");
console.log(d1.getFullYear());  //2021

const d2 = new Date();
console.log(d2.getFullYear());  //2022
 
//getMonth()

console.log(d1.getMonth());     //3
console.log(d2.getMonth());     //11

const months = ["January", "Februaray", "March", "April", "May",
"June", "July", "August", "September", "Octomber", "November", "December"];

console.log(months[d1.getMonth()]);     //March
console.log(months[d2.getMonth()]);     //Decwmber

//getDate()
console.log(d1.getDate());              //25
console.log(d2.getDate());              //16

//getHours()
console.log(d1.getHours());     //2
console.log(d2.getMonth());     //11

//getMinutes()
console.log(d1.getMinutes());   //0
console.log(d2.getMinutes());   //37

//getSeconds()
console.log(d1.getSeconds());   //0
console.log(d2.getSeconds());   //43

//getMilliseconds()
console.log(d1.getMilliseconds());  //0
console.log(d2.getMilliseconds());  //249

//getDay() returns weekday as a number 0-9
//Firts day of the week is day 0 and it is Sunday
//Last day of the week is day 6 and it it Saturday
console.log(d1.getDay());       //4
console.log(d2.getDay());       //6

//You can use an array of names, and getDay() to return weekday as name.
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let day1 = days[d1.getDay()];
let day2 = days[d2.getDay()];
console.log(day1); //Thursday
console.log(day2); //Saturday

//getTime()
//Returns milliseconds since 1 January 1970
const d0 = new Date("1970-01-01");
console.log(d0.getTime());  //0
console.log(d1.getTime());  //1616630400000
console.log(d2.getTime());  //1671258789421

//Date.now()
//Returns the numberof milliseconds since 01 January 1970
let today = Date.now();
let today2 = new Date ().getTime()
console.log(today);         //1671259523242 it takes 0.143 seconds
console.log(today2);        //1671259523242 it takes 0.162 seconds
//Date.now() and new Date().getTime() are equivalent, but Date.now() is faster

//calculate milliseconds in the year
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;
const yearInMs = 1000 * 60 * 60 * 24 * 365;
let years = Math.round(Date.now()/yearInMs);
console.log(years);     //53

//getTimezoneOffeset()
//Returns the differance between locat time and UTC(in minutes)

let diff1 = d1.getTimezoneOffset();
let diff2 = d2.getTimezoneOffset();

console.log(diff1);     //-120 minutes
console.log(diff2);     //-120 minutes



