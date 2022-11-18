const cars = ["BMW", "Volvo", "Mini"];

let txt = " ";

for(let x of cars){
    txt +=x + " ";
}

console.log(txt);//BMW Volvo Mini 

let t = " ";
for(let x in cars){
    t +=x + " ";
}

console.log(t);// 0 1 2 

let language = "JavaScript";
let text = "";
for (let x of language){
    text += x;
}

console.log(text);//JavaScript
