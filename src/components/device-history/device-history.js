/**
 * define function()
 * dependencies - utils
 * factory function()
 * @param {Object} Utils
 * @returns {function} init
 */
define(['utils'], function (Utils) {
    var deviceHistory;
    /**
     * @method init
     * @description - function to fetch Devices data and User data using AJAX Call.
     */
    var init = function () {
        Utils.doAJAX('../../data/history.json', getHistory, 'GET');
        Utils.doAJAX('../../data/devices.json', displayDevices, 'GET');
    }
    /**
     * @method getHistory
     * @description - function to parse the JSON data
     * @param {string} response
     */
    function getHistory(response) {
        deviceHistory = JSON.parse(response);
    }
    /**
    * @method displayDevices
    * @description - function to dynamically create Device History table.
    * @param {string} responseText
    */
    function displayDevices(responseText) {
        var data = JSON.parse(responseText),
            table = document.getElementsByClassName('main-table')[0],
            tbody = document.createElement('tbody');
        table.appendChild(tbody);
        tbody.classList.add('main-body');

        var tr, td, ul, li, icon,
            trMainChild, tdMainChild, h2, historyRow, toggleIcon,
            tableChild, theadChild, trHeadChild, thChild, tbodyChild, trInfo, tdInfo;

        for (var i = 0; i < data.device.length; i++) {
            tr = document.createElement('tr');
            tbody.appendChild(tr);
            tr.classList.add('main-table-row');

            for (var idx = 0; idx < 4; idx++) {
                td = document.createElement('td');
                td.classList.add('less-wide');
                tr.appendChild(td);
                switch (idx) {
                    case 0: {
                        td.innerHTML = data.device[i].assetno;
                        break;
                    }
                    case 1: {
                        td.innerHTML = data.device[i].name;
                        break;
                    }
                    case 2: {
                        td.classList.add('more-wide');
                        td.classList.remove('less-wide');
                        ul = document.createElement('ul');
                        td.appendChild(ul);
                        ul.classList.add('device-history-list');
                        for (var j = 0; j < data.label.length; j++) {
                            li = document.createElement('li');
                            li.innerHTML = data.label[j];
                            li.innerHTML += data.device[i].specs[j];
                            ul.appendChild(li);
                        }
                        break;
                    }
                    case 3: {
                        icon = document.createElement('i');
                        td.appendChild(icon);
                        icon.classList.add('plus-circle', 'change', 'icon');
                        break;
                    }
                }
            }
            trMainChild = document.createElement('tr');
            tbody.appendChild(trMainChild);
            trMainChild.classList.add('row-with-child-table', 'hidden');

            tdMainChild = document.createElement('td');
            trMainChild.appendChild(tdMainChild);

            h2 = document.createElement('h2');
            h2.innerHTML = 'Device History';
            tdMainChild.appendChild(h2);
            h2.classList.add('child-table-heading');

            tableChild = document.createElement('table');
            tdMainChild.appendChild(tableChild);
            tableChild.classList.add('child-table');

            theadChild = document.createElement('thead');
            tableChild.appendChild(theadChild);
            theadChild.classList.add('hide-in-mobile');

            trHeadChild = document.createElement('tr');
            theadChild.appendChild(trHeadChild);

            for (var k = 0; k < data.childTitle.length; k++) {
                thChild = document.createElement('th');
                thChild.innerHTML = data.childTitle[k];
                trHeadChild.appendChild(thChild);
            }

            tbodyChild = document.createElement('tbody');
            tableChild.appendChild(tbodyChild);
            tbodyChild.classList.add('child-body');

            for (var l = 0; l < deviceHistory.history[i].serial.length; l++) {
                for (var m = 0; m < deviceHistory.history[i].serial[l].usage.length; m++) {
                    trInfo = document.createElement('tr');
                    tbodyChild.appendChild(trInfo);
                    for (var n in deviceHistory.history[i].serial[l].usage[m]) {
                        if (n === 'personname')
                            continue;
                        tdInfo = document.createElement('td');
                        tdInfo.innerHTML = deviceHistory.history[i].serial[l].usage[m][n];
                        trInfo.appendChild(tdInfo);
                        tdInfo.classList.add('child-table-details');
                    }
                }
            }

            document.getElementsByClassName('change')[i].addEventListener('click', function (event) {
                historyRow = event.target.closest('.main-table-row').nextSibling;
                toggleIcon = event.target.closest('.less-wide').firstChild;
                if (!historyRow.classList.contains('hidden')) {
                    historyRow.classList.add('hidden');
                    toggleIcon.classList.remove('minus-circle');
                    toggleIcon.classList.add('plus-circle');
                }
                else {
                    historyRow.classList.remove('hidden');
                    toggleIcon.classList.remove('plus-circle');
                    toggleIcon.classList.add('minus-circle');
                }
            });
        }
    }
    return {
        init: init
    };
});