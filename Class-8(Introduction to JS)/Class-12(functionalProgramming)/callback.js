function printName(name, cb1, cb2){
    console.log(name);
    cb1(20);
    cb2('Rick')
}

function printAge(age){
    console.log(age);
}

function printLastName(lastName){
    console.log(lastName)
}

printName('John', printAge, printLastName)