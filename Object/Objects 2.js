const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(person.firstName + " is " + person.age + " years old.");
//John is 50 years old.

/*
Spaces and line breaks are not important. 
An object definition can span multiple lines:
*/
const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
}
console.log(person1.firstName + " is " + person1.age + " years old.");
//John is 50 years old.

/*
You can create an empty JavaScript object, 
and then adds 4 properties:
*/
const person2 = {};
person2.firstName = "John";
person2.lastName = "Doe";
person2.age = 50;
person2.eyeColor = "blue";
console.log(person2.firstName + " " + person2.lastName + " is " + person2.age + " years old.");
//John Doe is 50 years old.

/*
You can use the JavaScript Keyword new
*/
const person3 = new Object ();
person3.firstName = "John";
person3.lastName = "Doe";
person3.age = 50;
person3.eyeColor = "blue";
console.log(person3.firstName + " " + person3.lastName + " is " + person3.age + " years old.");
//John Doe is 50 years old.
//There is NO need to use new Object (). For readability, simplicity and execution speed use the object literal method.

/*
JavaScript objects are mutable.
Any changes to a copy of an object will also change the original object
*/
console.log(person3.firstName + " " + person3.lastName + " is " + person3.age + " years old.");
//John Doe is 50 years old.
const x = person3;
x.age = 60;//Will change both x.age and person3.age
console.log(person3.firstName + " " + person3.lastName + " is " + person3.age + " years old.");
//John Doe is 60 years old.

/*
The block of code inside of the for...in loop will be executed once for each property.
*/
let txt = "";
for (let x in person3){
    txt += person3[x] + " ";
}
console.log(txt);

/*
You can add new properties to an existing object by simply giving it a value.
*/
person3.nationality = "English";
console.log(person3.firstName + " is " + person3.nationality + ".");
//John is English.

/*
The delete keyword deletes a property from an object.
*/
delete person3.age;
console.log(person3.firstName + " " + person3.lastName + " is " + person3.age + " years old.");
//John Doe is undefined years old.

/*
Values in an object can be another object.
*/
const myObj = {
    name: "John",
    age: 30,
    cars: {
        car1: "Ford",
        car2: "BMW",
        car3: "Fiat"
    }
}
console.log(myObj.cars.car1);//Ford
console.log(myObj.cars.car2);//BMW
//the same as:
console.log(myObj.cars["car3"]);//Fiat
//the same as:
console.log(myObj["cars"]["car2"]);//BMW
//the same as:
let c1 = "cars";
let c2 = "car2";
let c3 = "car3";
console.log(myObj[c1][c2]);//BMW
console.log(myObj[c1][c3]);//Fiat

let c = "";
const myObj2 = {
    name: "John",
    age: 30,
    cars: [
        {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
        {name: "BMW", models:["320", "X3", "X5"]},
        {name: "Fiat", models:["500", "Panda"]}
    ]
}

for (let i in myObj2.cars) {
    c += myObj2.cars.name;
    for (let j in myObj2.cars.models){
        c += myObj2.cars[i].mobls[j];
    }
}
console.log (c);
