console.log("test1");
const cat = {
    name: 'Bertie',
    breed: 'Cymric',
    greeting: function(){
        console.log('Meow!');
    }
}

let catName = cat["name"];

cat.greeting();
//Moew!

cat.color = "black";

console.log("test2");
let bandInfo;
bandInfo = {
name: "Metallica",
nationality: "US",
genre: "heavy metal",
members: 4,
formed: 1983,
split:false,
albums:[{name:"Ride the Lighting", released:1983},
{name:"Master of Puppets", realesed:1986}],}

bandInfo = `My favorite band is ${bandInfo.name}. They are from ${bandInfo.nationality}. The band has ${bandInfo.members} members. The band is formed in ${bandInfo.formed} and their first album is ${bandInfo.albums[0].name}.`;
console.log(bandInfo);
//My favorite band is Metallica. They are from US. The band has 4 members. The band is formed in 1983 and their first album is Ride the Lighting.

console.log("test3");
const cat2 = {
    name : 'Bertie',
    breed : 'Cymric',
    color : 'white',
    greeting: function() {
      console.log('Hello, said',this.name, this.breed,'!');
    }
  }

cat2.greeting();
//Hello, said Bertie Cymric !
  
  const cat3 = {
    name : 'Cathy',
    breed : 'Munchkin',
    color : 'black',
    greeting: function() {
        console.log('Hello, said',this.name, this.breed,'!');
    }
  }
   
  cat3.greeting();
//Hello, said Cathy Munchkin !

  console.log("test4");
  //You can use Constructor
  function Cat (name,breed,color) {
    this.name = name;
    this.breed = breed;
    this.color = color;
   this.greeting = function(){
      console.log('Hello, said',this.name, `the`, this.breed,'!')};
  };

  const catCat2 = new Cat ("Bertie", "Cymric","white");
  catCat2.greeting();
//Hello, said Bertie the Cymric !

  const catCat3 = new Cat ("Cathy", "Munchkin","black");
  catCat3.greeting();
//Hello, said Cathy the Munchkin !


