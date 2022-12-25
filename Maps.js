// Map holds key-value pairs where the key can be any datatype
//Defferances between Objects and Maps:
//Object is not directly iterable, but Map is sirectly iterable
//Object do not have a size property, Map has size property
//Object keys muxt be Strings(or Symbols), but Maps key can be ANY datatype
//Object keys are not well ordered, but Map keys are ordered by insertation
//Object have default keys, but Map don't has default keys

//Create a Map
//1.Passing an Array to new Map()
//2. Creating a Map with new Map() and use Map.set()

const fruits1 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

console.log(fruits1);
//Map(3) { 'apple' => 500, 'bananas' => 300, 'orange' => 200 }

const fruits2 = new Map();
fruits2.set("apples", 500);
fruits2.set("bananas", 300);
fruits2.set("oranges", 200);

console.log(fruits2);
//Map(3) { 'apple' => 500, 'bananas' => 300, 'orange' => 200 }

const prices = new Map();
prices.set(1, 200);
prices.set(2, 150);
prices.set(3, 450);
prices.set(4, 300);
console.log(prices);
//Map(4) { 1 => 200, 2 => 150, 3 => 450, 4 => 300 }

//set() method can be used to change Map values
console.log(fruits2.get("bananas"));    //300
fruits2.set("bananas", 100);
console.log(fruits2.get("bananas"));    //100

//get() method
//The get() method gets the value of a key in a Map:
let apple = fruits1.get("apples");
console.log(apple);                     //500

//The size Property
let size1 = fruits1.size;
let size2 = fruits2.size;
let size3 = prices.size;
console.log(size1);                     //3
console.log(size2);                     //3 
console.log(size3);                     //4

//delete() method
fruits1.delete("oranges");
console.log(fruits1);
//Map(2) { 'apples' => 500, 'bananas' => 300 }
console.log(fruits1.size);              //2

fruits2.delete("apples");
console.log(fruits2);
//Map(2) { 'bananas' => 100, 'oranges' => 200 }
console.log(fruits2.size);              //2

//has() method
//The has() method returns true if a key exist in the Map:
let has1 = fruits1.has("apples");       //true
let has2 = fruits2.has("apples");       //false
console.log(has1);
console.log(has2);

//forEach() method
//The forEach() method calls a function for each key-value pair in a Map:
let txt1 = "";
fruits1.forEach(function(value, key){
    txt1 += key + " = " + value + "  ";
})
console.log(txt1);
//apples = 500  bananas = 300

let total = ""
prices.forEach(function(value, key){
    if(value > 250){
        total += key + " = " + value + " ";
    }
    else {return false};
})
console.log(total);
//3 = 450 4 = 300 


//  entries() method
//The entries() methods returns an interator object wth the [key, value] in a Map:

let txt2 = "";
for(const x of fruits1.entries()){
    txt2 += x + " ";
}
console.log(txt2);
//apples,500 bananas,300 
