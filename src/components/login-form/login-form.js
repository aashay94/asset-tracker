/**
 * define function()
 * dependencies - utils,formValidation
 * factory function()
 * @param {Object} Utils 
 * @param {Object} form
 * @returns {function} init
 */
define(["utils", "formValidation"], function (Utils, form) {
    /**
     * @method - init
     * @description - function to initialize validation of login form.
     */
    var init = function () {
        document.getElementById("loginButton").addEventListener('click', form.triggerValidate);
        form.formValidate();
    }
    return {
        init: init,
    };
});

