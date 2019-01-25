(function(window) {
'use strict'

var App = window.App || {};

function UserStore() {
  console.log('running the UserStore function')
  sessionStorage.setItem("admin@tissue.com", "admin123");
}

UserStore.prototype.save = function (userName, password) {
  sessionStorage.setItem(userName, password);
};

UserStore.prototype.get = function (userName) {
  var userPwd = sessionStorage.getItem(userName);
  return userPwd;
};

App.UserStore = UserStore;
window.App = App;
})(window);
