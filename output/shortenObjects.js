"use strict";

var createObject = function createObject(name, age) {
  return {
    name: name,
    age: age,
    // showInfo: () => {
    //     return `${name} is ${age} years old.`;
    // }
    showInfo: function showInfo() {
      return "".concat(name, " is ").concat(age, " years old.");
    }
  };
};

console.log(createObject('Jerson', 22).showInfo());