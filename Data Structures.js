const allTests = "70, 80, 90, 58, 80, 85, 65, 72, 83, 95";

const test1 = 70;
const test2 = 80;
const test3 = 90;
const test4 = 58;
const test5 = 80;
const test6 = 85;
const test7 = 65;
const test8 = 72;
const test9 = 83;
const test10 = 95;

console.log(test8);//72

//[Done] exited with code=0 in 0.159 seconds

const grades = [70, 80, 90, 58, 80, 85, 65, 72, 83, 95];

console.log(grades[7]);//72

//[Done] exited with code=0 in 0.148 seconds

let gradesSum = 0;

for(i = 0; i < grades.length; i++){
    gradesSum += grades [i]
}
console.log(gradesSum/grades.length);//77.8

const house1 = "red";
const house2 = "blue";
const house3 = "red";

const houses = new Set();

houses.add(house1).add(house2).add(house3);

console.log(houses);//Set(2) { 'red', 'blue' }