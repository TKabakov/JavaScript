const { ConsoleWriter } = require("istanbul-lib-report");

const d = new Date();       //creates a date object with current date and time
console.log(d);     //2022-12-15T16:46:02.351Z

const d1 = new Date("Oct 14, 2014 11:12:30");
const d2 = new Date("2014-10-14");

console.log(d1);    //2014-10-14T08:12:30.000Z
console.log(d2);    //2014-10-14T00:00:00.000Z

const d3 = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log(d3);    //2018-12-24T08:33:30.000Z

//JS counts month from 0 to 11;
//January is 0, December is 11;

const d4 = new Date (2018, 15, 24, 10, 33, 30, 0);
console.log(d4);    //2019-04-24T07:33:30.000Z
//Specifying month higher than 11, will result add overflow to the next year
//The same rule applies to the day numbers

const d5 = new Date (2018, 10, 35, 10, 33, 30, 0);
const d6 = new Date (2018, 11, 05, 10, 33, 30, 0);
console.log(d5, d6);

//Using 6 numbers specify year, month, day, hour, minute and second:
const d7 = new Date(2018, 11, 24, 10, 33, 30);
console.log(d7);        //2018-12-24T08:33:30.000Z

//Using 5 numbers spacify year, month, day, hour and minute
const d8 = new Date (2018, 11, 24, 10, 33);
console.log(d8);        //2018-12-24T08:33:00.000Z

//4 numbers specify year, month, day and hour
//3 numbers specify year, month and day
//2 numbers specify year and month

//1 number is different - it is treated as miliseconds

const d9 = new Date(2018);
console.log(d9);        //1970-01-01T00:00:02.018Z

//One or two digit year will be inteepreted as 19xx

const d11 = new Date(99, 11, 24);   //1999-12-23T22:00:00.000Z 
const d12 = new Date(9, 11, 24);    //1909-12-23T22:00:00.000Z 
const d13 = new Date(09, 11, 24);   //1909-12-23T22:00:00.000Z
console.log(d11, d12, d13);

const d14 = new Date(100000000000); //January 01 1970 plus 100000000000 miliseconds
const d15 = new Date(-100000000000);//January 01 1970 minus 100000000000 miliseconds
console.log(d14);       //1973-03-03T09:46:40.000Z
console.log(d15);       //1966-10-31T14:13:20.000Z

const d16 = new Date(24*60*60*1000);    //January 01 1970 plus 24 hours(1 day)
console.log(d16);

const d17 = new Date(3*24*60*60*1000);  //January 01 1970 plus 3 days
console.log(d17);       //1970-01-04T00:00:00.000Z

const d18 = new Date().toDateString();  //converts date to a more readable format
console.log(d18);   	//Thu Dec 15 2022

const d19 = new Date().toUTCString();
console.log(d19);       //Thu, 15 Dec 2022 17:35:39 GMT

