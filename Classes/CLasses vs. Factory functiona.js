//In JS inheritance means that you get properties and methods
//from the parent blueprint.
//All insctances inherit from thier bluprint.

//Inheriting in JS cah also means that you create derivative blueprint form the parent bluprint - Subclassing.

class Human {
    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello(){
        console.log(`Hello, I'm ${this.firstName}`);
    }
}

class Developer extends Human {
    constructor(firstName, lastName, thing){
        super(firstName, lastName);
        this.thing = thing;
    }
    code (){
        console.log(`${this.firstName} coded ${this.thing}`)
    }
}

const human = new Developer ("Chris", "Coyer", "this code" );
human.sayHello();//Hello, I'm Chris
human.code();//Chris coded this code
console.log(human.thing);//this code
//super calls the Human class
//super initiates the constructor form Human Class.

//Now we'll do the subclassing with Factory functions
//We'll use the same example

function Human1 (firstName, lastName){
    return {
        firstName,
        lastName,
        sayHello(){
            console.log(`Hello, I'm ${firstName}`)
        }
    }
}

function Developer1 (firstName, lastName){
    const human1 = Human1(firstName, lastName);
    return Object.assign({}, human1, {
        code (thing){
            console.log(`${this.firstName} coded ${thing}`)
        }
    })
}

const chris1 = Developer1("Chirs","Coyer", "this code")
chris1.sayHello();//Hello, I'm Chirs
chris1.code("this code");//Chirs coded this code
const human1 = Developer1 ("Chris", "Coyer");
human1.code("this super code");//Chris coded this code

//Overwriting og the Parant's metthod can be done in 3 ways:
//Creating a method with the same name.
//Calling the Parant's method.
//Changing whatever you need in the Subclass's method.

class Developer2 extends Human {
    sayHello(){
        //Calls the parent method
        super.sayHello();
        //Additional stuff to run
        console.log(`I'm a developer`)
    }
}

const chris2 = new Developer2("Chirs","Coyer")
chris2.sayHello();//I'm a developer

//The process looks like this with Factory functions:
console.log("factory function")
function Developer3 (firstName, lastName){
    const human2 = Human1(firstName, lastName);
    return Object.assign({}, human2, {
        sayHello(){
            //Calls the parent method
            human2.sayHello()
            //Additional stuff to run
            console.log(`I'm a developer.`)
        }
    })
}

const chris3 = new Developer3("Chirs","Coyer")
chris1.sayHello();//Hello, I'm Chirs!!!
