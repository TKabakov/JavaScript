var bird = {
    hasWings:true,
    canFlay: true,
    hasFeathers: true
}

var eagle1 = Object.create(bird);
console.log ("eagle1: ", eagle1);//eagle1:  {}

console.log("eagle1 has wings: ", eagle1.hasWings);//eagle1 has wings:  true
console.log("eagle1 can fly: ", eagle1.canFlay);//eagle1 can fly:  true
console.log("eagle1 has feathers: ", eagle1.hasFeathers);//eagle1 has feathers:  true

var eagle2 = Object.create(bird);
console.log("eagle2 has wings: ", eagle2.hasWings);//eagle2 has wings:  true

var penguin1 = Object.create(bird);
penguin1.canFlay = false;//JS looks at the object first and if it cannot find anything it look at the prototype
console.log("penguin1: ", penguin1);//penguin1:  { canFlay: false }

console.log("penguin1 has wings: ", penguin1.hasWings);
console.log("penguin1 can fly: ", penguin1.canFlay);

//the penguin1 hasWings property don't affect other objects(eagle1 and eagle2)
console.log("eagle1 has wings: ", eagle1.hasWings);//eagle1 has wings:  true


