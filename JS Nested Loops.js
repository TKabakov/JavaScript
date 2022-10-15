for (var j = 2023; j < 2025; j++){
console.log(j);
    for( var l = 6 ; l < 9; l++){
        console.log(l);
    }
}

//Custum multiplication table:
for ( var i = 2; i < 5; i++){
    for ( var m = 0; m < 10; m++){
        console.log(i+" times "+ m + " equals " + i*m);
    }
}

//Custum division table:
for( var a = 100; a > 9; a = a - 10){
    for( var b = 10; b > 4; b = b - 5){
        console.log( a + " divided by " + b + " equals " + a/b);
    }
} 

let cube ="ABCDEFG";
for ( let s = 0 ; s < cube.length ; s++){
    let styles = "front-size: 45px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
        console.log("%c" + cube[s], styles);
}

//the length of the string is automatically undated
let cube2 ="ABCD";
for ( let s = 0 ; s < cube2.length ; s++){
    let styles = "front-size: 45px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
        console.log("%c" + cube2[s], styles);
}

//Loop with if-else statement
for ( let t = 1 ; t <=10 ; t++ ){
    if( t == 1) {
        console.log("Gold medal");
    }
    else if( t == 2){
        console.log("Silver medal");
    }
    else if( t == 3){
        console.log("Bronze medal");
    }
    else{
        console.log(t);
    }
}

//Loop with switch statement
let y = 0;

for ( y = 1 ; y <= 10; y++){
    switch( y ){
        case 1:
            console.log("Gold medal");
            break;
        case 2:
            console.log("Silver medal");
            break;
        case 3:
            console.log("Bronze medal");
            break;
        default:
            console.log(y);    
    }
}

let z = 1;
let text = "";
while(z<=10){
    switch(z){
        case 1:
            console.log ("Gold medal");
            break;
        case 2:
            console.log ("Silver medal");
            break;
        case 3:
            console.log ("Bronze medal");
            break;
        default:
            text += z;
    }
    z++;
}
console.log(text);


