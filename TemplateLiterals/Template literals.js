let noMultiLine = "No multi-line strings in ES5";
console.log("Did you know? " + noMultiLine);
//Did you know? No multi-line strings in ES5

let mulltiLine = `
    Using ES6
    backticks,
    multi-line
    strings are
    possible!
`;

console.log(mulltiLine);

let first = `He said, "Don't you know? ES6, it's got some great features!`;
let second = `"Wouldn't you want to learn more?", he asked.`;

console.log(`${first} - and I got curious. ${second}`);
//He said, "Don't you know? ES6, it's got some great features! - and
// I got curious. "Wouldn't you want to learn more?", he asked.
