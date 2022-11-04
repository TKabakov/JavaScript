class Car {
    constructor (color, speed) {
        this.color = color;
        this.speed = speed;
    }

    turboOn(){
        console.log("turbo is on!")
    }
}

const car1 = new Car ("red", 120);
console.log(car1);//Car { color: 'red', speed: 120 }

console.log(car1.turboOn());//turbo is on!



