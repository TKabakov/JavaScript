
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
    return "Howdy, ${name}";
  }

  console.log(greeting({ name:"Alice"}));
  console.log(greeting(null));

  const age = 20;
  const beverage = age >= 21 ? "Beer" : "Juice";
  console.log(beverage);
