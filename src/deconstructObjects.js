const user = {
    name: "Jerson",
    email: "jersonmartinezsm@gmail.com",
    age: "22",
    country: "Nic",
    job: "Developer"
}

const {name, email, job = "Not specefic"} = user;

//const showInfo = ({name, job = "Student"}) => {
//    console.log(`${name} is ${job}`);
//}

const showInfo = ({name, job = "Student"}) => console.log(`${name} is ${job}`);

showInfo(user);

//console.log(name);