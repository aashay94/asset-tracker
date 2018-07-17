/**
 * define function()
 * dependencies - utils
 * factory function()
 * @param Utils
 * @returns{function} - init
 */
define(['utils'], function (Utils) {
    var count = 0;

    /**
   * @method init
   * @description - for making ajax call to fetch different json files.
   */

    var init = function () {
        Utils.doAJAX("../../data/history.json", displayDevices, "GET");
        Utils.doAJAX("../../data/allocateddevices.json", displayAllocatedDevices, "GET");
        Utils.doAJAX("../../data/allocateddevices.json", displayAvailableDevices, "GET");
        Utils.doAJAX("../../data/pendingrequests.json", displayPendingRequests, "GET");
    }

     /**
            * @method displayDevices
            * @description - callback function to fetch details about total number of devices.
            * @param{string} - responseText 
            */

    function displayDevices(responseText) {
        var data = JSON.parse(responseText);
        for (var i = 0; i < data.history.length; i++) {
            count += data.history[i].serial.length;
        }
        var span = document.createElement('span');
        span.classList.add("action-btn", "primary-btn", "mobile-inline-block");
        span.innerHTML = count + " " + "Devices";
        document.getElementsByClassName("dashboard-option-content")[0].appendChild(span);
    }

    /**
            * @method displayAllocatedDevices
            * @description - callback function to fetch details about number of allocated devices.
            * @param{string} responseText 
            */

    function displayAllocatedDevices(responseText) {
        var data = JSON.parse(responseText);
        var span = document.createElement('span');
        span.classList.add("action-btn", "primary-btn", "mobile-inline-block");
        span.innerHTML = data.allocateddevices.length + " " + "Allocated";
        document.getElementsByClassName("dashboard-option-content")[1].appendChild(span);
    }

    
    /**
            * @method displayAvailableDevices
            * @description - callback function to fetch details about number of available devices.
            * @param{string} responseText 
            */

    function displayAvailableDevices(responseText) {
        var data = JSON.parse(responseText);
        var span = document.createElement('span');
        span.classList.add("action-btn", "primary-btn", "mobile-inline-block");
        span.innerHTML = (count - data.allocateddevices.length) + " " + "Available";
        document.getElementsByClassName("dashboard-option-content")[2].appendChild(span);
    }

    
    /**
            * @method displayPendingRequests
            * @description - callback function to fetch details about number of pending requests.
            * @param{string} responseText 
            */

    function displayPendingRequests(responseText) {
        var data = JSON.parse(responseText);
        var span = document.createElement('span');
        span.classList.add("action-btn", "primary-btn", "mobile-inline-block");
        span.innerHTML = data.pendingrequests.length + " " + "Available";
        document.getElementsByClassName("dashboard-option-content")[3].appendChild(span);
    }
    return {
        init: init
    };
});