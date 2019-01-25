(function(window) {
'use strict'

var App = window.App || {};

function IssueStore() {
  this.data = {};
}

IssueStore.prototype.add = function (issue) {
  this.data[issue.id] = issue;
};

IssueStore.prototype.get = function (key) {
  return this.data[key];
};

IssueStore.prototype.getAll = function () {
  return this.data;
};

IssueStore.prototype.remove = function (key) {
  delete this.data[key];
};

App.IssueStore = IssueStore;
window.App = App;
})(window);
