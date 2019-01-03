"use strict";

function logUser() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Antonio";
  var country = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Spain";
  var email = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Unknown";
  var phone = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "555-000-555-0";
  return "NAme: ".concat(name, ", country: ").concat(country, ", email: ").concat(email, ", phone: ").concat(phone);
}

console.log(logUser("Jerson", undefined, "jersonmartinezsm@gmail.com", "39833938"));