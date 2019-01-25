function validate() {
	'use strict';

	var user = document.getElementById('user').value;
	var pass = document.getElementById('pass').value;
	var email = "adrian@tissue.com";
	var admin = "admin@tissue.com";
	var pwd  = "welcome1"
	var pwd2 = "admin123"

var userStore = new App.UserStore();
var actualPwd = userStore.get(user);

if (!actualPwd) {
	window.location.href = "registration.html";
	return false;
} else if (pass == actualPwd && user != admin) {
		window.location.href = "issues.html";
		return false;
} else if ((user == admin) && (pass == actualPwd)) {
		window.location.href = "subscription-dashboard.html";
		return false;
}	else {
		alert("Username and/or Password do not match.");
		return false;
	}
}

window.onload = function () {
		var form = document.getElementById("loginForm");
		form.onsubmit = validate;
	}
