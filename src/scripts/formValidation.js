define(['utils'], function (Utils) {
    var signupFlag = true;
    function showInvalidPopup() {
        modal = document.getElementsByClassName('invalid-email-wrapper')[0];
        signupTitle = document.getElementById("signupTitle");
        signUpForm = document.querySelector('.sign-up-wrapper');
        signUpForm.classList.add("opacity");
        signupTitle.classList.add("opacity");
        modal.parentNode.classList.remove("modal-hide");
        modal.classList.add("invalid-modal-index");
    }
    var formValidate = function () {
        var formField = document.getElementsByClassName("validate");
        for (var i = 0; i < formField.length; i++) {
            formField[i].addEventListener("change", function (event) {
                blankValidate(event.target);
            });
        }
        if (document.signupForm !== undefined) {
            document.signupForm.password.addEventListener("blur", passwordMatch);
            document.signupForm.cPassword.addEventListener("blur", passwordMatch);
        }
    };

    function blankValidate(fieldName) {
        document.getElementById("invalid") !== null ? document.getElementById("invalid").classList.add("error-message-hide") : console.log("No credential validation required");
        if (fieldName.value === '') {
            fieldName.nextElementSibling.classList.remove("error-message-hide");
            fieldName.nextElementSibling.classList.add("bad-status");
            fieldName.nextElementSibling.textContent = fieldName.placeholder + "  should not be left blank";
            return false;
        }
        else {
            fieldName.nextElementSibling.classList.add("error-message-hide");
            matchRegex(fieldName);
        }
    }
    function matchRegex(fieldName) {
        var regex;
        var inputValue = fieldName.value;
        if (fieldName.name === 'fullName') {
            regex = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/;
            if (inputValue.match(regex))                                       //validate the input with respect to the regex
            {
                //console.log("Username Format is correct");
            }
            else {
                fieldName.nextElementSibling.textContent = "username should not contain special characters";//.innerHTML();
                fieldName.nextElementSibling.classList.remove("error-message-hide");
            }
        }
        else if (fieldName.name === 'oracleId') {
            regex = /^\d{6}$/;
            if (inputValue.match(regex))                                       //validate the input with respect to the regex
            {
                //console.log("Oracle ID is correct");
            }
            else {
                fieldName.nextElementSibling.textContent = "oracle Id should contain 6 numeric characters";//.innerHTML();
                fieldName.nextElementSibling.classList.remove("error-message-hide");
            }
        }
        else if (fieldName.name === 'email') {
            regex = /^([a-zA-Z0-9_\-\.]+)@(sapient\.+)([a-zA-Z]{2,5})$/;
            if (inputValue.match(regex))                                       //validate the input with respect to the regex
            {
                //console.log("Email ID is correct");
            }
            else {
                showInvalidPopup();
                document.getElementById("closePopUp").addEventListener("click", function () {
                    modal.parentNode.classList.add("modal-hide");
                    signUpForm.classList.remove("opacity");
                    signupTitle.classList.remove("opacity");
                });
                fieldName.nextElementSibling.textContent = "email format is incorrect";
                fieldName.nextElementSibling.classList.remove("error-message-hide");
            }
        }
        else if (fieldName.name === 'phone') {
            regex = /^['0-9'+\- ]+$/;
            if (inputValue.match(regex))                                       //validate the input with respect to the regex
            {
                //console.log("Phone Format is correct");
            }
            else {
                fieldName.nextElementSibling.textContent = "phone format is incorrect";
                fieldName.nextElementSibling.classList.remove("error-message-hide");
            }
        }
        else if (fieldName.name === 'job') {
            regex = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/;
            if (inputValue.match(regex))                                       //validate the input with respect to the regex
            {
                //console.log("Job title is correct");
            }
            else {
                fieldName.nextElementSibling.textContent = "enter a valid job title";
                fieldName.nextElementSibling.classList.remove("error-message-hide");
            }
        }
        else if (fieldName.name === 'location') {
            regex = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/;
            if (inputValue.match(regex))                                       //validate the input with respect to the regex
            {
                console.log("Location is correct");
            }
            else {
                fieldName.nextElementSibling.textContent = "enter a valid location";
                fieldName.nextElementSibling.classList.remove("error-message-hide");
            }
        }
        else if (fieldName.name === 'password') {
            regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
            if (inputValue.match(regex))                                       //validate the input with respect to the regex
            {
                //console.log("password format is correct");
            }
            else {
                fieldName.nextElementSibling.textContent = "minimum eight characters, at least one letter and one number:";
                fieldName.nextElementSibling.classList.remove("error-message-hide");
            }
        }
        else if (fieldName.name === "serialNumber" || fieldName.name === "assetNumber") {
            if (isNaN(inputValue)) {
                fieldName.nextElementSibling.textContent = fieldName.placeholder + " should be numeric";
                fieldName.nextElementSibling.classList.remove("error-message-hide");
                fieldName.nextElementSibling.classList.add("bad-status");
            }
        }
    }
    function passwordMatch(e) {
        if (document.signupForm) {
            password1 = document.signupForm.password.value;
            password2 = document.signupForm.cPassword.value;
            if (password1 === password2) {
                document.signupForm.cPassword.nextElementSibling.classList.add("error-message-hide");
            }
            else {
                document.signupForm.cPassword.nextElementSibling.classList.remove("error-message-hide");
                signupFlag = false;
            }
        }
    }
    function triggerValidate(event) {
        event.preventDefault();
        signupFlag = true;
        var formField = document.getElementsByClassName("validate");
        for (var i = 0; i < formField.length; i++) {
            var check = blankValidate(formField[i]);
            blankValidate(formField[i]);
            passwordMatch();
            if (check === false) {
                signupFlag = false;
            }
        }
        if (signupFlag !== false) {
            Utils.login();
        }
    }
    return {
        triggerValidate: triggerValidate,
        formValidate: formValidate
    };
});