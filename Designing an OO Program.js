class Animal {
    constructor (color, energy){
        this.color = color;
        this.energy = energy;
    }
    isActive(){
        for(let i = super.energy;i == 0 ; super.energy-- ){
            if(i == 0){
            sleep()
            }
        }
    }
    sleep(){

    }
    getColor(){
        console.log(color);
    }
}

class Cat extends Animal{
    constructor(color,energy,sound, canJumpHigh, canClimbTrees){
        super(color, energy);
        this.sound = sound;
        this.canJumpHigh = canJumpHigh;
        this.canClimbTrees = canClimbTrees;
    }
    makeSound(){

    }
}
class Bird extends Animal{
    constructor(color, energy, sound, canFly){
        super (color, energy);
        this.sound = sound;
        this.canfly = canFly;
    }
    makeSound(){
        
    }
}

class HouseCat extends Cat{
    constructor(color,energy,sound, canJumpHigh, canClimbTrees){
    super(color,energy,sound, canJumpHigh, canClimbTrees);
    this.houseCatSound = houseCatSound;
    }
    makeSound(){
        if(this.makeSound = option){
            super.makeSound()
            console.log(this.houseCatSound)
        }
    }
}
