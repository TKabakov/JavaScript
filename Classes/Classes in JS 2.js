//JavaScript Classes are templates for JavaScript Objects.
//The syntax in classes must be written in "strict mode".
//In "strict mode" you will get an error, if you use a variable without declaring it.
class Car {
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
    age(){
        //date = new Date();//This will not work because "date" is not decared.
        let date = new Date();//This will work beacause "date" is declared.
        return date.getFullYear() - this.year;
    }//Create a Class method named "age", that returns the Car age
    age2(x){
        return x - this.year;
    }//Pass a parameter "x" into the "age()" method
}

const myCar = new Car("Ford", 2014);
console.log(myCar.name + "  " + myCar.year);//Ford  2014

console.log("My car is " + myCar.age() + " years old.");//My car is 8 years old.

let date = new Date();
let year = date.getFullYear();

console.log("My new car is  " + myCar.age2(year) + " years old.");//My new car is  8 years old.

//Use the "extends" keyword to inherit all methods from another class.
//Use the "super" method to call the parent's constructor function.

class Car2 {
    constructor (brand) {
        this.carname = brand;
    }
    present(){
        return "I have a " + this.carname;
    }
}

class Model extends Car2 {
    constructor(brand, mod) {
        super (brand);
        this.model = mod;
    }
    show (){
        return this.present() + ", it is a " + this.model;
    }
}

let myCar2 = new Model("Ford", "Mustang");

console.log(myCar2.show());


