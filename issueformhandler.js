function handleIssue() {
'use strict';

var email = document.getElementbyId('email').value;
var name = document.getElementbyId('issueName').value;
var detail = document.getElementbyId('issueDetail').value;
var issueStore = new App.IssueStore();

issueStore.add(email, name, detail, idGen())
}
