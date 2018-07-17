/**
 * define function()
 * dependencies - utils
 * factory function()
 * @param {Object} Utils
 * @returns {function} init
 */
define(['utils'], function (Utils) {
    /**
     * @method init
     * @description - function to fetch data of pending devices.
     */
    var init = function () {
        Utils.doAJAX("../../data/pendingrequests.json", displayDevices, "GET");
        console.log("123");
    }
    /**
     * @method displayDevices
     * @description - function to dynamically create table for displaying Pending Devices.
     * @param {string} responseText
     */
    function displayDevices(responseText) {
        var data = JSON.parse(responseText);
        console.log(data.pendingrequests.length);
        var tbody = document.getElementsByTagName('tbody')[0];

        for (var i = 0; i < data.pendingrequests.length; i++) {
            var row = newtr();
            tbody.appendChild(row);
            row.appendChild(newtd());
            row.lastChild.innerHTML = data.pendingrequests[i].assetno;
            row.appendChild(newtd());
            row.lastChild.innerHTML = data.pendingrequests[i].name;

            row.appendChild(newtd());
            var ul1 = document.createElement('ul');
            row.lastChild.appendChild(ul1);
            ul1.appendChild(newli());
            ul1.lastChild.innerHTML = data.pendingrequests[i].browser;
            ul1.appendChild(newli());
            ul1.lastChild.innerHTML = data.pendingrequests[i].os;
            ul1.appendChild(newli());
            ul1.lastChild.innerHTML = data.pendingrequests[i].defaultapps;

            row.appendChild(newtd());
            ul2 = document.createElement('ul');
            row.lastChild.appendChild(ul2);
            ul2.appendChild(newli());

            ul2.lastChild.classList.add("status-text", "status");

            if (data.pendingrequests[i].status === "pending") {
                ul2.lastChild.innerHTML = "PENDING REQUEST";
                ul2.lastChild.classList.add("good-status");
            }
            else if (data.pendingrequests[i].status === "denied") {
                ul2.lastChild.innerHTML = "REQUEST DENIED";
                ul2.lastChild.classList.add("bad-status");
            }
            ul2.appendChild(newli());
            ul2.lastChild.classList.add("bad-status", "primary-btn", "action-btn");
            ul2.lastChild.innerHTML = "REMOVE REQUEST";
            ul2.lastChild.addEventListener('click', removeRequest);
        }
    }
    /**
     * @method newtr
     * @description - function to create new table row.
     * @returns {Object}
     */
    function newtr() {
        return document.createElement('tr');
    }
    /**
     * @method newtd
     * @description - function to create new table data cell.
     * @returns {Object}
     */
    function newtd() {
        return document.createElement('td');
    }
    /**
     * @method newli
     * @description - function to create new li element.
     * @returns {Object}
     */
    function newli() {
        return document.createElement('li');
    }
    /**
     * @method removeRequest
     * @description - function to remove request of pending devices.
     */
    function removeRequest(event) {
        console.log("1");
        var parentList = event.target.parentElement;
        var parentCell = parentList.parentElement;
        var parentRow = parentCell.parentElement;
        parentRow.classList.add("hide-in-mobile");
    }
    return {
        init: init
    };
});