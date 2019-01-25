(function(window) {
'use strict'

var App = window.App || {};

function Issue(db){
this.db = db;
this.id = idGenerator();
}

Issue.prototype.createIssue = function (userName, description) {
  var issue = {userName: userName, description: description, id: this.id()};
  console.log("Adding issue");
  this.db.add(issue);
}

Issue.prototype.createOrder = function () {
  console.log('Adding issue');
}

Issue.prototype.deliverOrder = function (assignee) {
  console.log('Delivering order for ' + assignee);
  this.db.remove(assignee);
}

Issue.prototype.closeIssue = function (IssueComp) {
  console.log("Removing issue");
  this.db.remove(IssueComp);
}

Issue.prototype.retrieveIssue = function () {
  var IssueIdArray = Object.keys(this.db.getAll());

  console.log('Issue #' + this.issueId + ' has the following issues:');
  assigneeArray.forEach(function (id) {
    console.log(this.db.get(id));
  }.bind(this));
};

function idGenerator() {
  var id = 1;
  function generator() {
    id++;
    return id;
  }
  return generator;
}

App.Issue = Issue;
window.App = App;
})(window);
