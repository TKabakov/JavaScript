//if else statement
if (new Date().getHours() < 18){
    console.log("Good day!");
}
else {
    console.log("Good evening!")
}

const time = new Date().getHours();

//else if statement
let greeting;
if(time < 10){
    greeting = "Good morning!";
}
else if(time < 20){
    greeting = "Good day!";
}
else{ 
    greeting = "Good evening!"
}
console.log(greeting);

let coffee = "cold";
if(coffee == "hot") {
    console.log("Too hot")
} 
else if(coffee == "cold") {
    console.log("Too cold")
}
else {
    console.log("Just right")
};

let light = "red";
if(light == "green"){
    console.log("Drive")
}
else if(light == "yellow"){
    console.log("Get ready")
}
else if(light == "red"){
    console.log("Don't drive")
}
else{
    console.log("Ligth is not green, yellow or red")
}

switch(light){
    case'green':
        console.log("Drive");
        break;
    case'yellow':
        console.log("Get ready");
        break;
    case'red':
        console.log("Don't drive");
        break;
    default:
        console.log("The light is not green, yellow or red");
        break;
}

//Are you old enough program
let age = 18;
if(age >= 65){
    console.log("You get your income from your pansion")
}
else if(age < 65 && age >= 18){
    console.log("Each month you get a salary") 
}
else if(age < 18){
    console.log("You get an allowance")
}
else{
    console.log("The value of yor age is not numerical")
};

//Days of the week program
let day = "Thursday";
switch(day){
    case'Monday':
    console.log("Read a book");
    break;
    case'Tuesday':
    console.log("Watch a movie");
    break;
    case'Wednesday':
    console.log("Read a book");
    break;
    case'Thursday':
    console.log("Ride a bike");
    break;
    case'Friday':
    console.log("Socialize");
    break;
    case'Saturday':
    console.log("Chill");
    break;
    case'Sunday':
    console.log("Have a barbecue");
    break;
    default:
        console.log("There is not a such day")
};

//Another day of the week program based on switch
let weekDay;
switch (new Date().getDay()){
    case 0:
        weekDay = "Sunday";
        break;
    case 1:
        weekDay = "Monday";
        break;
    case 2:
        weekDay = "Tuesday";
        break;
    case 3:
        weekDay = "Wednesday";
        break;
    case 4:
        weekDay = "Thursday";
        break;
    case 5:
        weekDay = "Friday";
        break;
    case 6:
        weekDay = "Saturday";
        break;
}
console.log("Today is " + weekDay+".");

let text;
switch (new Date().getDay()){
    case 6:
        text = "Today is Saturday";
        break;
    case 0:
        text = "Today is Sunday";
        break;
    default:
        text = "Looking for the Weekend";        
}
console.log(text);

console.log(new Date().getDay());
console.log(new Date);

//The deafault case does not to be thr last case in the switch block:
switch (new Date().getDay()){
    default:
        text = "Looking for the weekend";
        break;
    case 6:
        text = "Today is Saturday";
        break;
    case 0:
        text = "Today is Sunday";
        break;
}
console.log(text);

switch(new Date().getDay()){
    case 4:
    case 5:
        text = "Sood it is weekend";
        break;
    case 0:
    case 6:
        text = "It is weekednd";
        break;
    default:
        text = "Looking forward to the weekend";        
}
console.log(text);

//Switch cases use strict comparison(===) and the values must be of the SAME type to match.
let x = "0"; // value is a string type
switch ( x ) {
    case 0:
        text = "Off";
        break;
    case 1:
        text = "On";
        break;
    default:
        text = "No value found";
}
console.log(x);
console.log(text);

