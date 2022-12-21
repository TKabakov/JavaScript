//Converting Arrays to Strings
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());
//Banana,Orange,Apple,Mango

//The join() methods works the same way as toString(), but can specfy a separator.

console.log(fruits.join());
//Banana,Orange,Apple,Mango
console.log(fruits.join(" * "));
//Banana * Orange * Apple * Mango

//pop() method removes the last element from an array
fruits.pop();
console.log(fruits);
//[ 'Banana', 'Orange', 'Apple' ]

console.log(fruits.pop());
//Apple

//push() adds a new elemnt to an array
fruits.push("Kiwi");
console.log(fruits);
//[ 'Banana', 'Orange', 'Kiwi' ]

//shift() works in similar way to pop(), but it removes the first item and it shift the indexes of all elements to lower index
let shift = fruits.shift();

console.log(fruits);
//[ 'Orange', 'Kiwi' ]
console.log(shift);
//Banana





