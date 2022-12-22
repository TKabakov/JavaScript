//Changing array elements
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
//[ 'Banana', 'Orange', 'Apple', 'Mango' ]
fruits [0] = "Kiwi";        //changes first element("Banana") with "Kiwi"
console.log(fruits);
//[ 'Kiwi', 'Orange', 'Apple', 'Mango' ]

//JS Array length
fruits [0] = "Banana";
fruits[fruits.length] = "Kiwi";     //changes the last element
console.log(fruits);
//[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]

//delete()
//Using delete() leaves undefined hole in the array
//Use pop() or shift() insead delete()
console.log(fruits);
//[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]
delete fruits[0];
console.log(fruits);
//[ <1 empty item>, 'Orange', 'Apple', 'Mango', 'Kiwi' ]

//Merging (Concatinating) Arrays
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Lius"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);
//[ 'Cecilie', 'Lone', 'Emil', 'Tobias', 'Lius' ]

//concat() returns a new array
//concat() method can take any number of arguments
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Lius"];
const arr3 = ["Robin", "Morgan"];
const myChildren2 = arr1.concat(arr2, arr3);
console.log(myChildren2);
/*[
    'Cecilie', 'Lone',
    'Emil',    'Tobias',
    'Lius',    'Robin',
    'Morgan'
]*/

//concat() method can also take strings as arguments

const myChildren3 = arr1.concat("Peter");
console.log(myChildren3);
//[ 'Cecilie', 'Lone', 'Peter' ]

//splice()method adss new item to an array and it can delete items
const fruits2 = ["Banana", "Orange", "Apple", "Kiwi"];
fruits2.splice(2, 0, "Lemon", "Mango");
console.log(fruits2);
[ 'Banana', 'Orange', 'Lemon', 'Mango', 'Apple', 'Kiwi' ]
fruits2.splice(1,2, "Watermelon", "Pineapple");
console.log(fruits2);
//[ 'Banana', 'Watermelon', 'Pineapple', 'Mango', 'Apple', 'Kiwi' ]

//first parameter defines the index where new elements will be added(spliced in)
//second parameter deifnrs how many elements (indexes) will be deleted.
//the rest of parameters ("Watermelon", "Pineapple") define the new parameters to be added.

fruits2.splice(2, 3, "Kiwi");
console.log(fruits2);
//[ 'Banana', 'Watermelon', 'Kiwi', 'Kiwi' ]
fruits2.splice(2, 0, 'Pineapple', 'Mango', 'Apple');
console.log(fruits2);
//['Banana','Watermelon','Pineapple','Mango','Apple','Kiwi','Kiwi']
  
//slice()
//The slice() method slice out a pice of an array into a new array
const citrus = fruits2.slice(0,6);
console.log(citrus);
//[ 'Banana', 'Watermelon', 'Pineapple', 'Mango', 'Apple', 'Kiwi' ]

//the slice() creates a new array
const citrus2 = fruits2.slice(2);
console.log(citrus2);
//[ 'Pineapple', 'Mango', 'Apple', 'Kiwi', 'Kiwi' ]
//If the end argument is omitted, slice() method slices out the rest of array

//Automatic toString()
//JS automatically converts an array to a comma separated string when a primitive value is expected
console.log(fruits2.toString());
//Banana,Watermelon,Pineapple,Mango,Apple,Kiwi,Kiwi
console.log(fruits2);
//['Banana','Watermelon','Pineapple','Mango','Apple','Kiwi','Kiwi']

