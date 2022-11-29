//the rest parameter syntax allows a function to accept
//arguments as an array.

function sum(...theArges) {
    let total = 0;
    for (const arg of theArges){
        total += arg;
    }
    return total;
}

console.log(sum(1, 2, 3));
//6

console.log(sum(1, 2, 3, 4));
//10

function myFun(a, b, ...manyMoreArgs){
    console.log("a", a);
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");
//a one
//b two
//manyMoreArgs [ 'three', 'four', 'five', 'six' ] <-- it's an array

myFun("one", "two", "three");
//a one
//b two
//manyMoreArgs [ 'three' ] <-- notice this is an array

myFun("one", "two");
//a one
//b two
//manyMoreArgs [] <-- an empty array

//Argument length

function fun1(...theArges){
    console.log(theArges.length);
}

fun1();//0
fun1(5);//1
fun1(5, 6, 7, 8);//4

