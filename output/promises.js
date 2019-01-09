"use strict";

var promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    var success = true;
    if (success) resolve("Everithing is correct!");else reject("An error has ocurred");
  }, 2000);
});
promise.then(function (message) {
  alert(message);
});
promise.catch(function (message) {
  alert(message);
});