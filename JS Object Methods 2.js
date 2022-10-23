let car = {};
car.color = "red";
//If the function is a property of an object, it is then referred to as a method.
car.turnTheKey = function(){
    console.log('The engine is running')
}
car.mileage = 98765;
car.ligthsOn = function(){
    console.log('The lights are on.')
}
console.log(car);
car.turnTheKey();
car.ligthsOn();
