class Polygon {
    constructor(){
        this.name = "Polygon"
    }
}

const poly1 = new Polygon();

console.log(poly1.name);//Polygon

class Person {
    constructor(i){
        this.i = i;
    }

introduce(){
    console.log(`Hello, my name is ${this.i}`);
}
}

const otto = new Person ("Otto");

otto.introduce();//Hello, my name is Otto
