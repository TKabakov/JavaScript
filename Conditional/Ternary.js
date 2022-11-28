//The conditional (ternary) operator is the only JavaScript operator that takes three operands:
//a condition followed by a question mark (?),
//then an expression to execute if the condition is truthy followed by a colon (:)
//and finally the expression to execute if the condition is falsy. 
//This operator is frequently used as an alternative to an if...else statement.

function getFee(isMember) {
    return (isMember ? '$2.00' : '$10.00');
  }
  
  console.log(getFee(true));
  // expected output: "$2.00"
  
  console.log(getFee(false));
  // expected output: "$10.00"
  
  console.log(getFee(null));
  // expected output: "$10.00"
  
  const greeting = (person) => {
    const name = person ? person.name : "stranger";
    return `Howdy, ${name}`;
  }

  console.log(greeting({ name:"Alice"}));//Howdy, Alice
  console.log(greeting(false));//Howdy, stranger  
  console.log(greeting(null));//Howdy, stranger
 
  const age = 20;
  const beverage = age >= 21 ? "Beer" : "Juice";
  console.log(beverage);//Juice
