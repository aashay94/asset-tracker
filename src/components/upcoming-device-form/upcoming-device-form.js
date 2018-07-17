/**
 * define function()
 * dependencies - formValidation
 * factory function()
 * @param {Object} form
 * @returns {function} init
 */
define(['formValidation'], function (form) {
    /**
     * @method init
     * @description - function to initialize validation of upcoming device component.
     */
    var init = function () {
        document.getElementsByClassName("form-btn")[0].addEventListener("click", function () {
            form.triggerValidate(event);
            if (document.querySelectorAll(".validate").value !== ' ')
                document.upcomingDevice.reset();
        });
        document.getElementsByClassName("form-btn")[1].addEventListener("click", function (event) {
            location.href = "../../pages/manage-devices/manage-devices.html";
        });
        form.formValidate();
    }
    return {
        init: init
    };
});
