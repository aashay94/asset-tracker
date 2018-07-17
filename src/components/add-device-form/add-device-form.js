/**
 * define function()
 * dependencies - formvalidation
 * factory function()
 * @param{object} form
 * @returns{function} - init
 */
define(['formValidation'], function (form) {

    /**
   * @method init
   * @description - To initialize the functionalities of add-device form.
   */

    var init = function () {
        document.getElementsByClassName("form-btn")[0].addEventListener("click", function () {
            form.triggerValidate(event);
            if (document.querySelectorAll('.validate').value !== ' ')
                document.addDeviceForm.reset();
        });
        document.getElementsByClassName("form-btn")[1].addEventListener("click", function () {
            location.href = "../../pages/manage-devices/manage-devices.html";
        });
        form.formValidate();
    }
    return {
        init: init
    };
});