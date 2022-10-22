/*
in JavaScript, arrays are objects. 
That means that arrays also have some built-in properties and methods.
One of the most commonly used built-in methods on arrays are the push() and the pop() methods.
To add new items to an array, I can use the push() method.
*/
let fruits = [];
fruits.push("apple");
console.log(fruits);//[ 'apple' ]
fruits.push("pear");
console.log(fruits);//[ 'apple', 'pear' ]

/*
To remove the last item from an array, I can use the pop() method.
*/
fruits.pop();
console.log(fruits);//[ 'apple' ]

function arrayBuilder (one,two, three){
    let arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    console.log(arr);
}

arrayBuilder("apple", "pear", "plum");//[ 'apple', 'pear', 'plum' ]

function arrayBuilder1 (one,two, three){
    let arr1 = [];
    arr1.push(one);
    arr1.push(two);
    arr1.push(three);
    return arr1;
}

let simpleArr1 = arrayBuilder1 ("apple", "pear", "plum");

console.log(simpleArr1);//"apple", "pear", "plum"

