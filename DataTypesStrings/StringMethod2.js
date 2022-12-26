let course = "        Java Script is cool      ";
console.log(course);
console.log(course.length);//21
//JS counts each of the characters including the spaces

console.log(course.trim());//Java Script is cool
//trim() removes all the white spaces at the begining and in the end

console.log(course.toUpperCase());
//JAVA SCRIPT IS COOL

console.log(course.toLocaleLowerCase());
//java script is cool

console.log(course.indexOf("S"));//13 (it is case sensitive)

console.log(course.lastIndexOf("o"));

console.log(course.slice(0, 12));//Extract specified index selection of the string

console.log(course.replace("is", " is so "));

console.log(course.charAt(10));//v

//Task 1
let x = "I am watching Dev Dreamer";

console.log(x.toUpperCase());//I AM WATCHING DEV DREAMER
//Task 2
console.log(x.slice(14,25));//Dev Dreamer
//YOu can do it in this way
console.log(x.slice(14));//Dev Dreamer
