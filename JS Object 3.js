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