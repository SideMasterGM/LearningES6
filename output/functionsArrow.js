"use strict";

var names = ['Jerson', 'Antonio', 'Martínez', 'Moreno']; // const number_chars = names.map(function(name){
//     console.log(`Name: ${name}, size: ${name.length}`);
// });
// const iterator = names.map((values) => {
//     return `Names: ${values}, size: ${values.length}`;
// });

var iterator = names.map(function (values) {
  return "Name: ".concat(values, ", size: ").concat(values.length);
});
console.log(iterator);