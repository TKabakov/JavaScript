const top7 = [
    "The Colosseum",
    "The Roman Forum",
    "The Vatican",
    "Trevi fountain",
    "The Pantheon",
    "Piazza Venezia",
    "The Palatie Hill"
]

const [] = top7;
const [first, second, third, ...secondVisit] = top7;

console.log(second);//The Roman Forum
console.log(...secondVisit);//Trevi fountain The Pantheon Piazza Venezia The Palatie Hill

function addTaxToPrices (taxRate, ...itemsBought){
    return itemsBought.map(item => taxRate * item)
}

let shopingCart = addTaxToPrices(1.1, 46, 89, 35, 79);

console.log(shopingCart);
//[ 50.6, 97.9, 38.5, 86.9 ]
//NOTE! The Rest parameter is the last parameter in the function definition.



   