/**
 * define function()
 * dependencies - formValidation
 * factory function()
 * @param form
 * @returns{function} - init
 */
define(["formValidation"], function (form) {

    /**
   * @method init
   * @description -function to implement validations on signup form
   */

    var init = function () {
        var modal, signUpForm;
        document.getElementById("signupButton").addEventListener('click', form.triggerValidate);
        form.formValidate();
    }
    return {
        init: init,
    };
});