const createObject = (name, age) => {
    return {
        name, 
        age, 
        // showInfo: () => {
        //     return `${name} is ${age} years old.`;
        // }
        showInfo(){
            return `${name} is ${age} years old.`;
        }
    }
}

console.log(createObject('Jerson', 22).showInfo());