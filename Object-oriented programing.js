var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function () {
        var calculation = purchase1.shoes * purchase1.stateTax;
        console.log("Total price:", calculation);
    }
}
purchase1.totalPrice();//Total price: 120
console.log(purchase1.stateTax);//1.2
console.log(purchase1.shoes);//100

var purchase2 = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: function () {
        var calculation = purchase2.shoes * purchase2.stateTax;
        console.log("Total price:", calculation);
    }
}

console.log(purchase2.shoes);//50
purchase2.totalPrice();//Total price: 60

var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function () {
        var calculation = this.shoes * this.stateTax;
        console.log("Total price:", calculation);
    }
}
purchase1.totalPrice();//Total price: 120
console.log(purchase1.stateTax);//1.2
console.log(purchase1.shoes);//100

var purchase2 = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: function () {
        var calculation = this.shoes * this.stateTax;
        console.log("Total price:", calculation);
    }
}

console.log(purchase2.shoes);//50
purchase2.totalPrice();//Total price: 60


//The same done in functional programing looks like that:

var shoes = 100;
var stateTax = 1.2;

function totalPrice(shoes, tax){
    return shoes * tax;
}

var toPay = totalPrice(shoes, stateTax);
console.log(toPay);//120

