/**
 * define function()
 * dependencies - utils
 * factory function()
 * @param Utils
 * @returns {function} init
 */
define(['utils'], function (Utils) {
    var init = function () {
        Utils.doAJAX("../../data/user.json", displayUserDetails, "GET");
        document.getElementById("editImage").addEventListener("click", displayPasswordFields);
        document.getElementById("cancelBtn").addEventListener("click", redirectComponent);
        document.getElementById("newPassword").addEventListener("click", hideDefaultMsg);
    }
    /**
    * @method displayUserDetails
    * @description - function to prepopulate user details in account-details form.
    * @param {string} responseText 
    */
    function displayUserDetails(responseText) {
        var data = JSON.parse(responseText);
        var userEmail = localStorage.userEmail;
        for (var i = 0; i < data.admin.length; i++) {
            if (userEmail === data.admin[i].email) {
                document.getElementById("accountName").value = data.admin[i].fname;
                document.getElementById("accountId").value = data.admin[i].oracleid;
                document.getElementById("accountEmail").value = data.admin[i].email;
                document.getElementById("accountPosition").value = data.admin[i].jobtitle;
                document.getElementById("accountAddress").value = data.admin[i].location;
                document.getElementById("accountPassword").value = data.admin[i].password;
                localStorage.setItem("password", data.admin[i].password);
            }
        }
        document.getElementById("updateBtn").addEventListener("click", validatePassword.bind(this, responseText));
    }
    /**
    * @method displayPasswordFields
    * @description - function to display password fields on edit button click. 
    */
    function displayPasswordFields() {
        document.getElementById("updateBtn").disabled = false;
        var passBlock = document.querySelectorAll(".password-validate");
        for (var i = 0; i < passBlock.length; i++) {
            passBlock[i].classList.remove("modal-hide");
        }
        document.getElementById("editImage").classList.add("modal-hide");
    }
    /**
    * @method validatePassword
    * @description - function to update and validate password fields.
    * @param {string} responseText 
    */
    function validatePassword(responseText) {
        event.preventDefault();
        var data = JSON.parse(responseText);
        for (var i = 0; i < data.admin.length; i++) {
            if (document.getElementById("accountPassword").value !== document.getElementById("newPassword").value) {
                if (document.getElementById("newPassword").value !== "") {
                    if (document.getElementById("newPassword").value ===
                        document.getElementById("retypePassword").value) {
                        document.getElementById("message").innerHTML = "Passwords matched and successfully changed";
                        localStorage.setItem("newPassword", document.getElementById("newPassword").value);
                        document.getElementById("accountForm").reset();
                    } else {
                        document.getElementById("message").innerHTML = "Passwords don't match";
                    }
                }
                else {
                    document.getElementById("message").innerHTML = "New Password can't be empty";
                }
            }
        }
    }
    /**
    * @method redirectComponent
    * @description - function to redirect page to specified location.
    */
    function redirectComponent() {
        event.preventDefault();
        location.href = "../../pages/dashboard/dashboard.html";
    }
    /**
    * @method hideDefaultMsg
    * @description - function to hide the error message.
    */
    function hideDefaultMsg() {
        document.getElementById("message").innerHTML = "";
    }
    return {
        init: init
    };
});
