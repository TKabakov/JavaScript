//sort() method
//it sorts an array alphabetically
const fruits = ["Orange", "Banana", "Apple", "Mango"];
//[ 'Orange', 'Banana', 'Apple', 'Mango' ]
console.log(fruits);
fruits.sort();
console.log(fruits);
//[ 'Apple', 'Banana', 'Mango', 'Orange' ]

//reverse()  method
//it reverses the elements in an Array
console.log(fruits);
//[ 'Apple', 'Banana', 'Mango', 'Orange' ]
//fruits.reverse();
console.log(fruits);
//[ 'Orange', 'Mango', 'Banana', 'Apple' ]

//Sort numerically
//By default, the sort() method sorts values as a strings(alphabetically)
//When numbers are sorted by sort() it will produce inccorect result
//This problem can be fixed by a compare function

const points = [40, 20, 100, 300, -30, 1, 5, 25, 10, -60, 0];
console.log(points);
/*[
  40, 20, 100, 300, -30,
   1,  5,  25,  10, -60,
   0
]*/
points.sort(function(a, b){return a - b});
console.log(points);
/*[
  -60, -30,  0,  1,   5,
   10,  20, 25, 40, 100,
  300
]*/

//You can sort desending
points.sort(function(a, b){return b - a});
console.log(points);
/*[
  300, 100, 40, 25,  20,
   10,   5,  1,  0, -30,
  -60
]*/

//Sorting an Array in Random Order
points.sort(function(){
    return 0.5 - Math.random()
});

console.log(points);
/*[
   20, -60, 25, 0, 40,
  -30, 300, 10, 5,  1,
  100
]*/

//array.sort() method is not accurate for sorting in random order
//The most popular correct method, is called the Fisher Yates shuffle
console.log("Random 1")
function myFunction(){
for (let i = points.length -1; i > 0; i--){
    let j = Math.floor(Math.random() * (i + 1));
    let k = points[i];
    points[i] = points[j];
    points[j] = k
}
console.log(points);
}
myFunction();

//The same can be done using the fallowing for loop
console.log("Random 2")
function myFunction3(){
    for (let i =0; i < points.length -1; i++){
        let j = Math.floor(Math.random() * (i + 1));
        let k = points[i];
        points[i] = points[j];
        points[j] = k;
    }
    console.log(points);
}
myFunction3();
