class Cake {
    constructor(lyr){
        this.layers = lyr + 1;
    }
}

var result = new Cake(1);
console.log(result.layers);

class Animal {
    constructor(lg){
        this.legs = lg;
    }
}

class Dog extends Animal {
    constructor() {
        super(4)
    }
}

var result2 = new Dog()
console.log(result2.legs);


class Animal2 {

}

class Cat extends Animal2{
    constructor(){
        super();
        
        this.noise = "mow";
        
    }
}

var result3 = new Animal2();
console.log(result3.noise);

class Person {
    sayHello(){
        console.log("Hello");
    }
}

class Friend extends Person {
    sayHello(){
        console.log("Hey");
    }
}

var result3 = new Friend();
result3.sayHello();
