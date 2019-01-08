"use strict";

var showInfo = function showInfo() {
  console.log("".concat(arguments.length <= 0 ? undefined : arguments[0], " is ").concat(arguments.length <= 1 ? undefined : arguments[1], " and email: ").concat(arguments.length <= 2 ? undefined : arguments[2]));
};

showInfo("Jerson", 22, "jersonmartinezsm@gmail.com");