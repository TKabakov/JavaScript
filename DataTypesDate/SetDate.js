const d1 = new Date();
console.log(d1);
//2022-12-20T16:55:01.202Z

d1.setFullYear(2020);
console.log(d1);
//2020-12-20T16:55:01.202Z

//setFullYear can st month and day
d1.setFullYear(2010,12,14);
console.log(d1);
//2011-01-14T16:57:35.186Z

//setMonth() method of a date oject (0-11)
d1.setMonth(0);
console.log(d1);
//2011-01-14T17:02:41.527Z

//setDate() sets the day of a object (1-31)
d1.setDate(22);
console.log(d1);
//2011-01-22T17:04:57.066Z

//steDate() can also add days to a date
console.log(d1);
//2011-01-22T17:06:44.390Z
d1.setDate(d1.getDate() + 40);
console.log(d1);
//2011-03-03T17:08:11.530Z

//setHours() method sets the hours of a date oject(0-23)
d1.setHours(22);
console.log(d1);
//2011-03-03T20:13:55.355Z

//setMinutes() method sts the minutes of date object(0-59)
d1.setMinutes(44);
console.log(d1);
//2011-03-03T20:44:08.304Z

//setSeconds()
d1.setSeconds(14);
console.log(d1);
//2011-03-03T20:44:14.771Z

//Compare Dates
let txt = "";
const today = new Date();
const someday = new Date();
someday.setFullYear(2050, 0, 14);

if(someday > today){
    txt = "Today is before January 14, 2050.";
} else {
    txt = "Today is after January 14, 2050.";
}
console.log(txt);

//Use the correct Date method to set the year of a date object to 2020
const d2 = new Date ();
d2.setFullYear(2020);
console.log(d2);
//2020-12-20T17:26:25.497Z
