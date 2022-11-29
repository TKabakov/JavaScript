//Create an object
const car = {type:"Fiat", model:"500", color: "yellow"};
console.log("The car type is " + car.type);
//The car type is Fiat
console.log("Car color is " + car.color);
//Car color is yellow
console.log("The car model is " + car.model);
//The car model is 500

//Spaces and line breaks are not important. An object definition can span multiple lines:
const person = {
    firstName: "John",
    lastName: "Smith",
    age: 45,
    eyeColor: "blue"
};

console.log(person.firstName + " is " + person.age + " years old " + " and he has " + person.eyeColor + " eyes.");
//John is 45 years old  and he has blue eyes.

//You can access object properties in two ways:
//objectName.propertyName
//objectName["propertyName"]

console.log(person.firstName + " " + person.lastName);
//John Smith
console.log(person["firstName"] + " " + person["lastName"]);
//John Smith (it is the same)

//Objects can also have methods.
//A method is a function stored as a property.

const person1 = {
    firstName   : "John",
    lastName    : "Doe",
    Id          : 5566,
    fullName    : function () {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person1.fullName());
//John Doe
console.log(person1.firstName);
//John

const person2 = {
    firstName   : "Tom",
    lastName    : "Jhones",
    country     : "Britan"
};
console.log(person2.country);
//Britan

const person4 = {
    name    : "John",
    age     : 50
}
console.log(person4.name + " is " + person4.age + " yeard old.");
//John is 50 yeard old.

// You can define a property by assigning it a value.
const myCar = new Object ();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;
console.log(myCar.make);
//Ford

//The above example could also be written using an object initializer, 
//which is a comma-delimited list of zero or more pairs of property names 
//and associated values of an object, enclosed in curly braces ({}):

const myCar2 = {
    make    : "Ford",
    model   : "Mustang",
    year    : 1969
};
console.log(myCar2.model);
//Mustang

//Unassigned properties of an object are undefined (and not null).
myCar2.color;//undefined

//Properties of JavaScript objects can also be accessed or set using a bracket notation
console.log(myCar2["make"]);
//Ford
myCar2["make"] = "Fiat";
console.log(myCar2["make"]);
//Fiat

//A property name that has a space or a hyphen, that starts with a number, 
//or that is held inside a variable can only be accessed using the square bracket notation.

//In the folloing example, four variables are created 
//and assigned in a single go, separated by commas

const   myObj   = {},
        str     = "myString",
        rand    = Math.random(),
        anotherObj = {};
//After that, we create additionol proparties
myObj.type              = "Don't syntax for a key named type";
myObj["date created"]   = "This key has a space";
myObj[str]              = "This is in variable str";
myObj[rand]             = "A random number is the key here";
myObj[anotherObj]       = "This key is object anotherObj";
myObj[ ""]              = "This key is an empty string";

console.log(myObj);
/*{
  type: "Don't syntax for a key named type",
  'date created': 'This key has a space',
  myString: 'This is in variable str',
  '0.5392947776166293': 'A random number is the key here',
  '[object Object]': 'This key is object anotherObj',
  '': 'This key is an empty string'
}*/

console.log(myObj.myString);
//This is in variable str

//JavaScript object property names (keys) can only be strings or Symbols — 
//all keys in the square bracket notation are converted to strings 
//unless they are Symbols.

const myCar3 = {};
let propertyName = "make";
myCar3[propertyName] = "Ford";
propertyName = "model";
myCar3[propertyName] = "Mistang";
propertyName = "year";
myCar3[propertyName] = 1969;

console.log(myCar3);
//{ make: 'Ford', model: 'Mistang', year: 1969 }

//One of the most common ways of building an object in JavaScript is using the object literal syntax: {}.

let assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills    : 30,
    streetSmarts    : 30,
    health          : 40,
    specialAbility  : "young and ambitious",
    greeting        : "Let's make some money"
}
console.log(assistantManager);
/*{
  rangeTilesPerTurn: 3,
  socialSkills: 30,
  streetSmarts: 30,
  health: 40,
  specialAbility: 'young and ambitious',
  greeting: "Let's make some money"
}*/

//To access the object you simply consol log it
let table = {
    legs    : 3,
    color   : "brown",
    priceUSD : 100
}
console.log(table);
//{ legs: 3, color: 'brown', priceUSD: 100 }

//You can console log any individual property
console.log(table.color);//brown

let house = {
    rooms: 3,
    color: "brown",
    priceUSD: 10000,
}

//An alternative approach of building objects is 
//to first save an empty object literal to a variable, 
//then use the dot notation to declare new properties on the fly

let house2 = {};
house2.rooms = 4;
house2.color = "pink";
house2.priceUSD = 12345;

//nothing is preventing me from combining the two approaches
console.log(house);
//{ rooms: 3, color: 'brown', priceUSD: 10000 }
house.windows = 10;
console.log(house);
//{ rooms: 3, color: 'brown', priceUSD: 10000, windows: 10 }

//This flexbility additionally means that I can update already existing properties
house.windows = 11;
console.log(house);
//{ rooms: 3, color: 'brown', priceUSD: 10000, windows: 11 }

//There is an alternative syntax to the dot notation I used up until this point.
//This alternative syntax is known as the brackets notation.

let house3 = {};
house3["rooms"] = 4;
house3["color"] = "brown";
house3["priceUSD"] = 12345;
console.log(house3);
//{ rooms: 4, color: 'brown', priceUSD: 12345 }

//I can both access and update properties on objects using 
//either the dot notation, or the brackets notation, or a combination of both

let car2 = {};
car2.color = "red";
car2["color"] = "green";
car2["speed"] = 200;
car2.speed = 150;
console.log(car2);
//{ color: 'green', speed: 150 }

//With the brackets notation, I can add space characters inside property names

car2["number of doors"] = 4;
console.log(car2);
//{ color: 'green', speed: 150, 'number of doors': 4 }

// I can add numbers (as the string data type) as property keys

car2["2022"] = 1901;
console.log(car2);
//{ '2022': 1901, color: 'green', speed: 150, 'number of doors': 4 }

//Finally, there's one really useful thing that bracket notation has 
//but is not available in the dot notation: 
//It can evaluate expressions.

let arrOfKeys = ["altitude", "color", "speed"];
let drone = {
    speed : 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i< arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]]);
}
/*200
red
100*/

