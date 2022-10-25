console.log("Task 1")
/*
Write a "for" loop that will perform exactly the same repetitive code as this:
*/
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log("Counting comleted!");
/*
1
2
3
4
5
Counting comleted!
*/

//The same can be done by loop
for (i = 1; i < 6; i++){
    console.log(i);
}
console.log("Counting comleted!");
/*
1
2
3
4
5
Counting comleted!
*/

//The same is:
let m = 1;
for( ; m < 6; m++){
    console.log(m);
}
console.log("Counting comleted!");
/*
1
2
3
4
5
Counting comleted!
*/

//The same is:
let n = 1;
let text = "";
while( n < 6) {
    text += n;
    n++;
}
console.log(text);
console.log("Counting comleted!");
/*
12345
Counting comleted!
*/

console.log("Task 2")
/*
Write a "for" loop that will perform exactly the same repetitive code as this:
*/
console.log(5);
console.log(4);
console.log(3);
console.log(2);
console.log(1);
console.log("Countdown finished!");
/*
5
4
3
2
1
Countdown finished!
*/

//The same can be down by loop:
for (i = 5; i > 0; i--){
    console.log(i);
}
console.log("Countdown finished!");
/*
5
4
3
2
1
Countdown finished!
*/

console.log("Task 3");
/*
Write a "while" loop that will perform exactly the same repetitive code as this:
*/
while( n < 6) {
    text += n;
    n++;
}
console.log(text);
console.log("Counting comleted!");
/*
12345
Counting comleted!
*/

console.log("Task 4");
/*
Write a "while" loop that will perform exactly the same repetitive code as this:
*/
let p = 5;
let text3 = ""
while ( p > 0 ){
    text3 += p;
    p = p - 1;
}
console.log(text3);
console.log("Countdown finished!");
/*
54321
Countdown finished!
console.log("Task 5");
*/

/*
Write a "while" loop that will perform exactly the same repetitive code as this:
*/
console.log(2018);
console.log(2019);
console.log(2020);
console.log(2021);
console.log(2022);
/*
2018
2019
2020
2021
2022
*/

let f = 2018;
while (f < 2023){
    console.log(f);
    f++;
}
/*
2018
2019
2020
2021
2022
*/
