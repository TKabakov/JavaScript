class Birds {
    useWings(){
        console.log("Flying!")
    }
}
class Eagle extends Birds {
    useWings (){
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Birds {
    useWings(){
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings();//Flying!Barely flapping!
kingPenguin.useWings();//Diving!