const person = {
    name: ["Bob", "Smith"],//properties
    age: 32,//properties
    bio: function () {
      console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },//method
    introduceSelf () {
      console.log(`Hi! I'm ${this.name[0]}.`);
    },//method,shorter sytax without word function
  };
 
  console.log(person.name);
  console.log(person.name[0]);
  console.log(person.age);
  console.log(person.bio());
  console.log(person.introduceSelf());

  const person1 = {
    name: ["Bob", "Smith"],
    age: 45,
  };

function logProperty(propertyName){
    console.log(person1[propertyName]);
  };

  logProperty("name");//[ 'Bob', 'Smith' ]
  logProperty("age");//45

  /*
  you can also set (update) the value of object members by declaring the member you want to set 
  (using dot or bracket notation).
  */
  person1.age = 55;
  person1["name"]["last"] = "Cratchit";

  console.log(person1);

  /*
  You can also create completely new members.
  */
person1["eyes"] = "hazel";
person1.farewell = function(){
    console.log("Bye everybody!");
};

console.log(person1["eyes"]);

person1.farewell();







