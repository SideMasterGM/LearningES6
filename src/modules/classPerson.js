export default class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    showInfo(){
        console.log(`Your name is: ${this.name}, and you is: ${this.age}`);
    }
}

// export default {Person};
// export default Person;