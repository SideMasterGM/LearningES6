const person = ['Jerson Antonio', 22, 'Nicaragua'];

const [name, age, country, job = "Web Developer"] = person;

// const showInfo = ([name, age, country, job = "Web Developer"] = person) => {
//     return `Datas: ${name}, ${age}, ${country}, ${job}`;
// }

const showInfo = ([name, age, country, job = "Web Developer"] = person) => `Datas: ${name}, ${age}, ${country}, ${job}`;

console.log(showInfo());