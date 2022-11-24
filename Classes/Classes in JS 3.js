class Car {
    constructor (brand) {
        this.carname = brand;
    }
    present(){
        return "I have a " + this.carname;

    }
}

class Model extends Car {
    constructor(brand, mod) {
        super (brand);
        this.model = mod;
    }
    show () {
        return this.present() + ", it is a " + this.model;
    }
}

let myCar = new Model( "Ford", "Mustang");
console.log(myCar.show());

class Car2 {
    constructor(brand){
        this.carname = brand;
    }
    get cnam() {
        return this.carname;
    }
    set cnam(x){
        this.carname = x;
    }
}

let myCar2 = new Car2 ("Ford");

console.log(myCar2.cnam);
