const person = {fname:"John", lname:"Doe", age:25};

let txt = "";
for(let x in person){
    txt += person[x] + " ";
}

console.log(txt);//John Doe 25

const numbers = [45, 4, 9, 16, 25];


for (x in numbers){
    txt += numbers[x];
}
console.log(txt);

//The "forEach()" metjods calls a function once for each array element.

numbers.forEach(myFunction);
console.log(txt);
function myFunction(value, index, array){
    txt += value + " ";
}
//45 4 9 16 25 
