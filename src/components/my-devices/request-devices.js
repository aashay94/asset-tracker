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
     * @description - function to fetch data of devices allocated to users .
     */
    var init = function () {
        Utils.doAJAX("../../data/allocateddevices.json", displaydevicesTable, "GET");
    }
     /**
     * @method displaydevicesTable
     * @description - function to dynamically create table for displaying Allocated Devices.
     * @param {string} responseText
     */
    function displaydevicesTable(responseText) {
        var data = JSON.parse(responseText);
        var table = document.createElement('table');
        table.classList.add('inner-table')
        document.getElementById("inner-table").appendChild(table);
        var thead = document.createElement('thead');
        table.appendChild(thead);
        var trhead = document.createElement('tr');
        thead.appendChild(trhead);
        var tdhead1 = document.createElement('td');
        tdhead1.innerHTML = "asset no";
        tdhead1.classList.add('text-uppercase');
        trhead.appendChild(tdhead1);
        var tdhead2 = document.createElement('td');
        tdhead2.innerHTML = "device";
        tdhead2.classList.add('text-uppercase');
        trhead.appendChild(tdhead2);
        var tdhead3 = document.createElement('td');
        tdhead3.innerHTML = "project id";
        tdhead3.classList.add('text-uppercase');
        trhead.appendChild(tdhead3);
        var tdhead4 = document.createElement('td');
        tdhead4.innerHTML = "date of issue";
        tdhead4.classList.add('text-uppercase');
        trhead.appendChild(tdhead4);
        var tdhead5 = document.createElement('td');
        tdhead5.innerHTML = "return date";
        tdhead5.classList.add('text-uppercase');
        trhead.appendChild(tdhead5);
        var tdhead6 = document.createElement('td');
        tdhead6.innerHTML = "manager";
        tdhead6.classList.add('text-uppercase');
        trhead.appendChild(tdhead6);
        var tdhead7 = document.createElement('td');
        tdhead7.innerHTML = "status";
        tdhead7.classList.add('text-uppercase');
        trhead.appendChild(tdhead7);
        var tbody = document.createElement('tbody');
        tbody.classList.add('innertable-content');
        table.appendChild(tbody);

        for (var i = 0; i < data.allocateddevices.length; i++) {
            var tr = document.createElement('tr');
            tr.classList.add('for-before');
            tbody.appendChild(tr);
            var td1 = document.createElement('td');
            td1.innerHTML = data.allocateddevices[i].assetno;
            tr.appendChild(td1);
            var td2 = document.createElement('td');
            td2.innerHTML = data.allocateddevices[i].device;
            tr.appendChild(td2);
            var td3 = document.createElement('td');
            td3.innerHTML = data.allocateddevices[i].pid;
            tr.appendChild(td3);
            var td4 = document.createElement('td');
            td4.innerHTML = data.allocateddevices[i].issuedate;
            tr.appendChild(td4);
            var td5 = document.createElement('td');
            td5.innerHTML = data.allocateddevices[i].returndate;
            tr.appendChild(td5);
            var td6 = document.createElement('td');
            td6.innerHTML = data.allocateddevices[i].manager;
            tr.appendChild(td6);
            var td7 = document.createElement('td');
            var currentdate = new Date();
            var returndate = data.allocateddevices[i].returndate;
            var returndate = returndate.split('/').reverse().join('.');
            var returndate = new Date(returndate);
            var difference = returndate.getTime() - currentdate.getTime();
            var days_left = Math.round(difference / (1000 * 60 * 60 * 24));
            if (days_left < 0) {
                td7.innerHTML = "Date Overdue";
                td7.classList.add('bad-status');
                tr.appendChild(td7);
                var alertbtn = document.createElement('button');
                alertbtn.innerHTML = "Send Alert";
                alertbtn.classList.add('secondry-btn');
                td7.appendChild(alertbtn);
            }
            else {
                td7.innerHTML = days_left + "  days left";
                td7.classList.add('good-status');
                tr.appendChild(td7);
            }
        }
    }
    return {
        init: init
    };
});