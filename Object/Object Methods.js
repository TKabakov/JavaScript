//In this example, this refers to the person object.
// fullName is a method of the person object.
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
console.log(person.fullName());//John Doe

/*
A JavaScript method is a property containing a function definition.
*/
/*
This example uses the toUpperCase() method of the String object, to convert a text to uppercase:
*/
let message = "Hello world!";
let x = message.toUpperCase();
console.log(x);//HELLO WORLD!

const person1 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    name : function () {
        return (this.firstName + " " + this.lastName).toUpperCase()
    }
}
console.log("My father is " + person1.name());//My father is JOHN DOE

const person2 = {
    name: "John",
    age: 45,
    city: "New York"
}

console.log(person2.name + " , " + person2.age + " , " + person2.city );//John , 45 , New York

/*
The properties of an object can be collected in a loop.
*/

let txt = "";
for (let x in person2) {
    txt += person2[x] + " ";
}

console.log(txt);//John 45 New York

/*
Any JavaScript object can be converted to an array using Object.values().
*/
const myArray = Object.values(person2);
console.log(myArray);//[ 'John', 45, 'New York' ]

/*
Any JavaScript object can be stringified (converted to a string)
 with the JavaScript function JSON.stringify().
*/
console.log(JSON.stringify(person2));//{"name":"John","age":45,"city":"New York"}

/*
JSON.stringify will not stringify functions.
You have to convert functions to strings first.
*/
person2.eyeColor = function(){return "blue";};
person2.eyeColor = person2.eyeColor.toString();

console.log(JSON.stringify(person2));//{"name":"John","age":45,"city":"New York","eyeColor":"function(){return \"blue\";}"}

/*
It is also possible to stringify JavaScript arrays.
*/
const arr = ["John", "Peter", "Sally", "Jane"];
console.log (JSON.stringify(arr));//["John","Peter","Sally","Jane"]




