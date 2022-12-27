//The code inside the function is not executed when a function is defined, but when the function is invoked.
//It is common to use "call a function", "call upon a function", "start a function" or "execute a function".

function myFunction (a, b){
    return a * b;
}
console.log(myFunction(10, 2));     //20

//The function above belongs to no object, but in fact it belongs to the dafault object - HTML page or browser window.

//This way to invoke a JS function is not a good practice, because the global variables, global methods and global functions can easily create name conflicts and bugs in the global object.

//Invoking a Function as a Method
const myObject = {
    firstName: "John",
    lastName: "Doe",
    fulLName: function (){
        return this.firstName + " " + this.lastName;
    }
}

console.log(myObject.fulLName());    //John Doe

//The function "fullName" belongs to the object "myObject", which is the owner of the function.

const myObject2 = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
      return this;
    }
  }
  console.log(myObject2.fullName());     //{ firstName: 'John', lastName: 'Doe', fullName: [Function: fullName] }

//Invoking a Function with a Function Constructor
//This i sa function constructor:
function myFunction3(arg1, arg2){
    this.firstName = arg1;
    this.lastName = arg2;
}

//This creates a new object:
const myObj = new myFunction3("John", "Doe");

//This will return "John"
console.log(myObj.firstName);       //John
//A constructor invokation creats a new object.The new object inherits the properties and methods from its constructor.

