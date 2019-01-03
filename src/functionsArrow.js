const names = ['Jerson', 'Antonio', 'Martínez', 'Moreno'];

// const number_chars = names.map(function(name){
//     console.log(`Name: ${name}, size: ${name.length}`);
// });

// const iterator = names.map((values) => {
//     return `Names: ${values}, size: ${values.length}`;
// });

const iterator = names.map(values => `Name: ${values}, size: ${values.length}`);

console.log(iterator);