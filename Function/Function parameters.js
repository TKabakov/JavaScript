//Seting a default value to a fuction parameter

function A (x,y){
    if (y === undefined){
        y = 2;
    }
    return x * y;
}
console.log(A(4));//8

//Setting a default value to a function parameter (y=2)
function B (x, y = 2){
    return x * y
}
console.log(B(4));//8

//The argument object contains an array of the arguments used when the function was called (invoked).
x = sumAll(1,123,500,115,44,88);
 
function sumAll() {
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum
}
console.log(sumAll(x));
