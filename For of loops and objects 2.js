const car = {
    engine: true,
    steering: true,
    speed: "slow"
}
const sportCar = Object.create(car);
sportCar.speed = "fast";
console.log("The sportsCar object: ", sportCar);
//For-in loops
console.log("----for-in is unrealiable-----");
//for-in loop iterates over not only the object, but also its prototype
for(prop in sportCar){
    console.log(prop);
}
console.log("Interacting over objects AND its prototype!");

//For-of loo[]
console.log("----for-of is reliable----");

for (prop of Object.keys(sportCar)){
    console.log(prop+ ": " + sportCar[prop]);
}

console.log("Iterates over objects's OWN PROPERTIES only!" );

const car2 = {
    engine: true
}

const sportsCar2 = Object.create(car);
sportsCar2.speed = "fast";
console.log("The sportsCar2 object: ", sportsCar2);

for(prop in sportsCar2){
    console.log(prop);
}
//speed
//engine
for(prop of Object.keys(sportsCar2)){
    console.log(prop + ": " + sportsCar2[prop]);
}
//speed: fast
