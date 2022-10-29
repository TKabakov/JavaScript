function doubleIt(num){
    return num * 2
}
function objectMaker(val) {
    return {
        prop:val
    }
}

console.log(objectMaker(20));

console.log(doubleIt(10));
console.log(doubleIt(10).toString());

console.log(objectMaker(doubleIt(80)));

