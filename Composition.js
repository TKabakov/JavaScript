//The composition is the act of combining or merging two things together
//The most common way is with Object.assign

class Human {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello(){
        console.log(`Hello, I'm ${this.firstName}`)
    }
}

class Designer extends Human{
    design(thing){
        console.log(`${this.firstName} designed ${thing}`)
    }
}

class Developer extends Human {
    code (thing){
        console.log(`${this.firstName} coded ${thing}`)
    }
}

const skills = {
    code(thing){/*...*/},
    design(thing){/*...*/},
    sayHello(){/*...*/}
}
class DesignerDeveloper {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;

        Object.assign(this, {
            code: skills.code,
            design: skills.design,
            sayHello: skills.sayHello
        })
    }
}

const chris = new DesignerDeveloper("Chris", "Coyer");
console.log(chris);

class Designer2{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;

        Object.assign(this,{
            design: skills.design,
            sayHello: skills.sayHello
        })
    }
}

class Developer2 {
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;

        Object.assign(this, {
            code: skills.code,
            sayHello: skills.sayHello
        })
    }
}



