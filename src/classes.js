class User {
    constructor(name, age, email){
        this.name = name;
        this.age = age;
        this.email = email;
    }

    showInfo(){
        return `
            <b>Name: </b>${this.name}<br/>
            <b>Age: </b>${this.age}<br/>
            <b>Email: </b>${this.email}<br/>
            <hr/>
        `;
    }
}

class Student extends User {
    constructor(name, age, email, career){
        super(name, age, email);
        this.career = career;
    }

    showInfo(){
        return `
            <b>Name: </b>${this.name}<br/>
            <b>Age: </b>${this.age}<br/>
            <b>Email: </b>${this.email}<br/>
            <b>Career: </b>${this.career}<br/>
            <hr/>
        `;
    }
}

const Instancia = new User("Jerson Martínez", 22, "jersonmartinezsm@gmail.com");
document.write(Instancia.showInfo());

const InstanciaTwo = new Student("Antonio Moreno", 22, "sidemastersm@gmail.com", "Telematic Engineering");
document.write(InstanciaTwo.showInfo());