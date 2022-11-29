const materials = [
    "Hydrogen",
    "Heluim",
    "Lithium",
    "Beryllium"
]

console.log(materials.map(material => material.length));
//[ 8, 6, 7, 9 ]

const a = 4;
const b = 2;

function A(){
    return a + b + 100;
};

console.log(A (a,b));//106

//return is implied in arrow function
()=>a + b + 100;

(function (a, b){
    const chuck = 42;
    return a + b + chuck;
});

(a, b)=>{
    const chuck = 42;
    return a + b + chuck;
};

//Arrow functions are alaway unnamed.
//Traditional function
function bob (a) {
    return a + 100;
}

//Arrow function
const bob2 = (a) => a + 100;

const func = (x) => x * x;
//concise body syntax, "return" is implied

const func2 = (x, y) => {
    return x + y;
};
//block body, explicit "return" needed

//If the token following the arrow is not a left brace,
//JS sees the arrow function as concise body.
//This is the reason the arrow function not to work with objects in the same way as a traditional function. 

const empty = () => {};
console.log(empty);

(()=> "foobar")();
//"foobar"

const simple = (a) => a > 15 ? 15 : a;

console.log(simple(16));//15
console.log(simple(10));//10

const max = (a, b) => a > b ? a : b;

const arr = [ 5, 6, 13, 0, 1, 18, 23];

const sum = arr.reduce((a, b) => a + b);

console.log(sum);//66

const even = arr.filter ((v) => v % 2 === 0);

console.log(even);
//[ 6, 0, 18 ]



