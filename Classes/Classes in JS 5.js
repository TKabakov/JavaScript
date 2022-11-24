//One wat to define class is using a class declaration
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

//An imortant differance between function declaration and class declaration is 
//that while the function cna be called before they are defined,
//classes MUST BE defined before they can be constructed

//Class expressions
//Another way to define a class is a class expression,
//which can be named or unnamed.
let Rectangle2 = class {
    constructor (height, width){
        this.height = height;
        this.width = width;
    }
}

console.log(Rectangle2.name);//Rectangle2

let Rectangle3 = class Rectangle3 {
    constructor (height, width){
        this.height = height;
        this.width = width;
    }
}

console.log(Rectangle3.name);//Rectangle3

//NOTE: Class expressions MUST BE defined they can be used
//in the same way as class declaration

//The super keyword is used to call corresponding methods of supper class

class Cat {
    constructor(name){
        this.name = name;
    }

speak(){
    console.log(`${this.name} makes a noise.`);
    }
}

class Lion extends Cat{
    speak(){
        super.speak();
        console.log(`${this.name} roars.`);
    }
}

const l = new Lion("Fuzzy");
l.speak();
//Fuzzy makes a noise.
//Fuzzy roars.

class Rectangle4 {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
    get area(){
        return this.calArea();
    }
    calArea(){
        return this.height * this.width;
    }
}

const square = new Rectangle4(10,10);

console.log(square.area);//100
console.log(square.calArea());//100

class Animal {
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} makes a noise.`)
    }
}

class Dog extends Animal {
    constructor(name){
        super(name);
    }
    speak(){
        console.log(`${this.name} barks.`);     
    }
}

const d = new Dog("Mitzie");
d.speak();//Mitzie barks.
