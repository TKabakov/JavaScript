//Assing a function to a variable
const foo = () => {
    console.log("foobar");
}
foo();//Invoke an anonymous fuction by using variable
//foobar

//Passing a function as an argument
function sayHello() {
    return "Hello, ";
}

function greeting (helloMessage, name) {
    console.log(helloMessage() + name);
}

greeting(sayHello, "JavaSript!");//Hello, JavaSript!

//Note: The function that we pass as an argument to another function is called a callback function. 
//sayHello() is a callback function.

function sayHello2() {
    return () => {
        console.log("Hello!");
    };
}
sayHello2();

//Note: A function that returns a function or takes other functions as arguments 
//is called a higher-order function.
