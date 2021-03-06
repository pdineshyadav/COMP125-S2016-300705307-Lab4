/* Main Javascript file */

/**
Filename = app.js
@author Dinesh Palle
@date : 8th July 2016
StudentID : 300705307
Website : http://comp125lab4.azurewebsites.net/
@description : This is the main javascript file of this website
*/

// IIFE = Immediately Invoked Function Expression
(function () {

    // Code goes here
    "use strict";


    // Event listner with inline anonymous event handler function
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        formInputOnConsole();


        contactForm.reset();
    })




    // formInputOnConsole function 
    function formInputOnConsole() {

        function User(username, password) {
            this.userName = username;
            this.Password = password;
        }

        var user = new User(username.value, password.value)

        console.log(user);

    }



})();