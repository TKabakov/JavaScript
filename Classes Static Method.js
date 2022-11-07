//A static method is created with the "static" keyword, 
//and you can only call the method on the class itself.
class Car {
    constructor(name) {
        this.name = name;
    }
    static hello() {
        return "Hello!!";
    }
}

//You can call 'hello()' on the Car Class:
let myCar = new Car ("Ford");
console.log(Car.hello());//Hello!!

// But NOT on  a Car Object:
//console.log(myCar.hello());
// this will raise an TypeError.

//To use the "myCar" object inside the static method, 
//you can send it as parameter.

class Car2 {
    constructor(name){
        this.name = name;
    }
    static hello(x){
        return "Hello " + x.name;
    }
}

let myCar2 = new Car("Ford");

console.log(Car2.hello(myCar2));
