(function(window) {
'use strict'

var FORM_SELECTOR = '[issues="form"]';
var CHECKLIST_SELECTOR = '[issues="checklist"]';
var App = window.App;
var Issue = App.Issue;
var IssueStore = App.IssueStore;
var FormHandler = App.FormHandler;
var CheckList = App.CheckList;
var myIssue = new Issue('ncc-1701', new IssueStore());
window.myIssue = myIssue;
var checkList = new CheckList(CHECKLIST_SELECTOR);
checkList.addClickHandler(myIssue.closeIssue.bind(myIssue));
var formHandler = new FormHandler(FORM_SELECTOR);

formHandler.addSubmitHandler(function (data) {
  myIssue.createOrder.call(myIssue, data);
  checkList.addRow.call(checkList, data);
});
console.log(formHandler);
})(window);
