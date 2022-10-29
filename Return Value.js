function doubleIt(num){
    return num * 2
}
function objectMaker(val) {
    return {
        prop:val
    }
}


console.log(objectMaker(20));//{ prop: 20 }

console.log(doubleIt(10));//20

console.log(doubleIt(10).toString());//20

console.log(objectMaker(doubleIt(80)));//{ prop: 160 }(prop gets value 80*2

