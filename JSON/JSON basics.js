'{"greeting":"hello"}'

const jasonStr ='{"greeting":"hello"}'
//Converting JSON object in JS object
JSON.parse(jasonStr);
//{greeting: 'hello'}
const aPlainObj = JSON.parse(jasonStr);

aPlainObj.greeting = "hi";
//'hi'

aPlainObj
//{greeting: 'hi'}

const data = {
    firstName:"John",
    lastName:"Doe",
    greeting:"Hello"
}

//Converting a JS object into a JASON object

JSON.stringify(data)
//'{"firstName":"John","lastName":"Doe","greeting":"Hello"}'

var superHeros = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
  }
  
  console.log(superHeros.homeTown);
//Metro City

  console.log(superHeros['active'])
//true

  console.log(superHeros['members'][1]['powers'][2]);
  //Superhuman reflexes
  var hero = superHeros["members"][0]["powers"][1];
  console.log(hero);
  //Turning tiny

  const m =
  [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]

  console.log(m[0]['powers'][0]);
  //Radiation resistance

