class Train{
    constructor(color,lightsOn){
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights(){
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus(){
        console.log("Lights on?", this.lightsOn);
    }
    getSelf(){
        console.log(this);
    }
    getPrototype(){
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

var myFirstTrain = new Train("red", false);

console.log(myFirstTrain);//Train { color: 'red', lightsOn: false }

var mySecondTrain = new Train("blue", false);
var myThirdTrain = new Train("green", true);

console.log(mySecondTrain);//Train { color: 'blue', lightsOn: false }
console.log(myThirdTrain);//Train { color: 'green', lightsOn: true }

var train4 = new Train ("red", false);

console.log(train4.toggleLights());//undefined
console.log(train4.lightsStatus());//Lights on? true
console.log(train4.getSelf());//Train { color: 'red', lightsOn: true }
console.log(train4.getPrototype());//undefined{}

class HighSpeedTrain extends Train {
    constructor (paasangers, highSpeedOn, color, lightsOn){
        super(color, lightsOn);
        this.paasangers = paasangers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed(){
        this.highSpeedOn = !this.highSpeedOn;
        console.log("High speed status: ", this.highSpeedOn);
    }
    toggleLights(){
        super.toggleLights();
        super.lightsStatus();
        console.log("Lights are 100% operatuinal.")
    }
} 

var train5 = new Train ("blue", false);
var highSpeed1 = new HighSpeedTrain (200, false, "gtreen", false);

console.log(train5.toggleLights());//undefined
console.log(train5.lightsStatus());//Lights on? true

console.log(train5.getPrototype());//{constructor: ƒ, toggleLights: ƒ, lightsStatus: ƒ, getSelf: ƒ, getPrototype: ƒ}
console.log(highSpeed1.getPrototype());//Train {constructor: ƒ, toggleHighSpeed: ƒ, toggleLights: ƒ}

class StationaryBike {
    constructor(position, gears) {
        this.position = position;
        this.gears = gears;
    }
}

class Treadmill {
    constructor (position, model) {
        this.position = position;
        this.model = model;
    }
}

class Gym {
    constructor (openHrs, stationaryBikePos, treadmillPos){
        this.openHrs = openHrs;
        this.stationaryBike = new StationaryBike(stationaryBikePos,8);
        this.treadmill = new Treadmill(treadmillPos,5);
    }
}

var boxingGym = new Gym("7-22", "right corner", "left corner");

console.log(boxingGym.openHrs);//7-22
console.log(boxingGym.stationaryBike);//StationaryBike { position: 'right corner', gears: 8 }
console.log(boxingGym.treadmill);//Treadmill { position: 'left corner', model: 5 }