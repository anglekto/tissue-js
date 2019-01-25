function handleReg () {
    'use strict';

    var userName = document.getElementById('email').value;
    var password = document.getElementById('pass').value;

    var userStore = new App.UserStore();
    userStore.save(userName, password);

    var Validation = false;
    var Validation = {
        isValidEmail: function (email) {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
        }
    }
}
window.onload = function() {
    document.getElementById("regForm").onsubmit = handleReg;
}
