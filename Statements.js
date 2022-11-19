//if, else if, else statement
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

let m = 888888888888889;
let n = m % 2;
if(n == 0){
    console.log("Числото е четно");
}
else {
    console.log("Числото е нечетно")
};

let result = 30;
if(result > 40) {
    console.log("You passed the test")
}
else{
    console.log("You did not pass the test")
}

let place = "gold";
if(place == "first"){
    console.log("Gold")
}
else if(place == "secod"){
    console.log("Silver")
}
else if(place == "third"){
    console.log("Bronze")
}
else{
    console.log("No medal")
}

//Switch statement
let place2 = "first";
switch(place2){
    case'first':
        console.log("Gold");
        break;
    case'second':
        console.log("Silver");
        break;
    case'third':
        console.log("Bronze");
        break;
    default:
        console.log("No medal");
}

//Compare if, else if, else satatemet with switch statement
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
    console.log("Car is not green, yelloe or red")
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
