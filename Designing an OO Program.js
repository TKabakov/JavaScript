class Animal {
    constructor (color = "yellow", energy = 60){
        this.color = color;
        this.energy = energy;
    }
    isActive(){
        if(this.energy > 0) {
            this.energy -= 20;
            console.log("Energy is decreasing, currently at:", this.energy)
        } else if(this.energy == 0){
            this.sleep();
        }
    }
    sleep(){
            this.energy += 20;
            console.log("Energy is increasing, currently at:", this.energy)
    }
    getColor(){
        console.log(color);
    }
}

class Cat extends Animal{
    constructor(sound = "purr", canJumpHigh = true, canClimbTrees = true, color,energy,){
        super(color, energy);
        this.sound = sound;
        this.canJumpHigh = canJumpHigh;
        this.canClimbTrees = canClimbTrees;
    }
    makeSound(){
        console.log(this.sound);
    }
}
class Bird extends Animal{
    constructor(sound = "chirp", canFly = true, color, energy ){
        super (color, energy);
        this.sound = sound;
        this.canfly = canFly;
    }
    makeSound(){
        console.log(this.sound);
    }
}

class HouseCat extends Cat{
    constructor(houseCatSound = "mow", sound, canJumpHigh, canClimbTrees,color,energy, ){
    super(sound, canJumpHigh, canClimbTrees, color,energy);
    this.houseCatSound = houseCatSound;
    }
    makeSound(option){
        if(option){
            super.makeSound();
        }
        console.log(this.houseCatSound);
    }
}

class Tiger extends Cat{
    constructor(tigerSound = "Roar!", sound, canJumpHigh, canClimbTrees, color, energy,){
    super(sound, canJumpHigh, canClimbTrees, color, energy);   
    this.tigerSound = tigerSound;
    }

    makeSound(option){
        if(option) {
            super.makeSound();
        }
        console.log(this.tigerSound);
    }
}

class Parrot extends Bird {
    constructor(canTalk = false, sound , canFly, color, energy){
        super(sound, canFly, color, energy);
        this.canTalk = canTalk;
    }
    makeSound(option){
        if(option){
            super.makeSound();
        }
        if (this.canTalk){
            console.log("I'm a talking parrot!");
        }
    }
}

var polly = new Parrot(true);
var fiji = new Parrot(false);

console.log(polly.makeSound());//I'm a talking parrot!
console.log(fiji.makeSound());

console.log(polly.color);//yellow
console.log(polly.energy);//100

polly.isActive();//Energy is decreasing, currently at: 80

var penguin = new Bird("shriek", false, "black and white, 120");

console.log(penguin);//Bird {color: 'black and white, 120',energy: 60,sound: 'shriek',canfly: false}

console.log(penguin.sound);
console.log(penguin.energy);
console.log(penguin.isActive());//Energy is decreasing, currently at: 40

var leo = new HouseCat();

console.log(leo.makeSound(false));//mow

console.log(leo.makeSound(true));//purr mow

var cuddles = new Tiger();

cuddles.makeSound(false);//Roar!
cuddles.makeSound(true);//pur Roar!
