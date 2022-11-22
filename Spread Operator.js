let top3 = [
    "The Colosseum",
    "Trevi Fountain",
    "The Vatican City"
];
//Visit The Colosseum
//Then visit Trevi Fountain
//Finish with a visit to The Vatican City

function showItinerary (place1, place2, place3){
    console.log("Visit " + place1);
    console.log("Then visit " + place2);
    console.log("Finish with a visit to " + place3);
}

showItinerary();

showItinerary(top3[0], top3[1], top3[2]);

showItinerary(...top3);
//Visit The Colosseum
//Then visit Trevi Fountain
//Finish with a visit to The Vatican City
