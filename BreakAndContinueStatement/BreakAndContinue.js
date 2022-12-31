//The break statement "jumps out" of a loop.
let txt1 = "";
for(let i = 0; i < 10; i++){
    if (i == 3) { break; }
    txt1 += " The number is " + i + ".";
    console.log(txt1);
}
console.log(txt1);
// The number is 0. The number is 1. The number is 2.
//The loop ends when i = 3

//The continue statement breaks one iteration (in the loop) if a specific consition occurs and continues with the next iteration.
let txt2 = "";
for(let x = 0; x < 10; x++){
    if ( x == 3) {continue;}
    txt2 += " The number is " + x + ".";
}
console.log(txt2);
//The number is 0. The number is 1. The number is 2. The number is 4. The number is 5. The number is 6. The number is 7. The number is 8. The number is 9.
//There is no "The number is 3"

//With lable referance, the brak statement can be used to jump out of any code block.
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let txt3 = "";

list:{
    txt3 += cars[0] + " ";
    txt3 += cars[1] + " ";
    break list;
    txt3 += cars[2] + " ";
    txt3 += cars[3] + " ";
}

console.log(txt3);
//BMW Volvo 
