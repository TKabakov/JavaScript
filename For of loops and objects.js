//For of loop CANNOT work on an object directly, since an object is not iterable.
/*
const car = {
    speed: 100,
    color: "blue"
}

for (prop of car) {
    console.log(prop)
}
TypeError: car is not iterable
*/

const colors = ["red", "orange", "yellow"]
for (var color of colors) {
    console.log(color);
}
//red
//orange
//yellow

//A for loop can be run on arrays to loop over objects.

//The Object.key method recieves an object as its parameter.
const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2));//[ 'speed', 'color' ]

//The Object.values() method
const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3))//[ 300, 'yellow' ]

//The Object.entries() returns an array listing both the keys and the values.
const car4 = {
    speed: 400,
    color: "magenta"
}
console.log(Object.entries(car4));//[ [ 'speed', 400 ], [ 'color', 'magenta' ] ]

var clothingItem = {
    price: 50,
    color: "beige",
    material: "cotton",
    season: "autumn"
}

for(key of Object.keys(clothingItem)){
    console.log(key, ":", clothingItem[key])
}
//price : 50
//color : beige
//material : cotton
//season : autumn

function testBracketsDynamicAccess(){
    var dynamicKey = Math.random() > 0.5 ? "speed" : "color";

    var drone = {
        speed: 15,
        color: "orange"
    }

    console.log(drone[dynamicKey]);
}
testBracketsDynamicAccess();//15 or orange
testBracketsDynamicAccess();

