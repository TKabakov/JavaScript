const d1 = new Date("2015-03-25");  //ISO syntax
console.log(d1);

const d2 = new Date("2015-03");     //ISO without day
console.log(d2);

const d3 = new Date("2015");        //ISO dates without month and day
console.log(d3);

const d4 = new Date("2015-03-25T12:35:00Z");
console.log(d4);

//Date and time are separated with a capital T
//UTS time is defined with a capital letter Z

const msec = Date.parse("March 21, 2012");  //convert it to miliseconds
console.log(msec);

const d5 = new Date(msec);          //convert miliseconds to date
console.log(d5);
