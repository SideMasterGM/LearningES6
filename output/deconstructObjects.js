"use strict";

var user = {
  name: "Jerson",
  email: "jersonmartinezsm@gmail.com",
  age: "22",
  country: "Nic",
  job: "Developer"
};
var name = user.name,
    email = user.email,
    _user$job = user.job,
    job = _user$job === void 0 ? "Not specefic" : _user$job; //const showInfo = ({name, job = "Student"}) => {
//    console.log(`${name} is ${job}`);
//}

var showInfo = function showInfo(_ref) {
  var name = _ref.name,
      _ref$job = _ref.job,
      job = _ref$job === void 0 ? "Student" : _ref$job;
  return console.log("".concat(name, " is ").concat(job));
};

showInfo(user); //console.log(name);