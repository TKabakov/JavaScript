const cat = {
    name: 'Bertie',
    breed: 'Cymric',
    greeting: function(){
        console.log('Meow!');
    }
}

let catName = cat["name"];

cat.greeting();

cat.color = "black";

let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = `The cat's name is ${ catName }.`;
para2.textContent = `The cat's color is ${ cat.color }.`;

section.appendChild(para1);
section.appendChild(para2);

let bandInfo;
let myBand = {
name: "Metallica",
nationality: "US",
genre: "heavy metal",
members: 4,
formed: 1983,
split:false,
albums:album1{name:"Ride the Lighting", released:"1983"};
album2{name:"Master of Puppets", realesed:1986},}

bandInfo = `My favorite band is ${myBand.name}. They are form ${myBand.nationality}. The band has ${myBand.members}. The band is formed in ${myBand.formed} and their first album is${myBand.albums.album1}.
console.log(bandInfo);