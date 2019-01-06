class User {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

const Antonio = new User("Jerson Martínez", 22);
document.write(`Your name is: ${Antonio.name} and you are ${Antonio.age} years old.`);