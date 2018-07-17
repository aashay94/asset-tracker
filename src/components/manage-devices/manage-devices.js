/**
 * define function()
 * dependencies - utils
 * factory function()
 * @param Utils
 * @returns {function} init
 */
define(['utils'], function (Utils) {
    /**
     * @method init
     * @description - function to fetch data to display devices
     */
    var init = function () {
        Utils.doAJAX("../../data/devices.json", displayDevices, "GET");
    }
    /**
    * @method displayDevices
    * @description - function to dynamically create manage device table and popup of the edit device form.
    * @param {string} responseText 

    */
    function displayDevices(responseText) {
        var data, div0, table, thead, tr, idx, th, tbody, td1, td2, t3, ul, index, li1, td4;
        var divIcon, editIcon, deleteIcon, editBtn, modal, manageDeviceForm, assetNo;
        data = JSON.parse(responseText);
        div0 = document.getElementsByClassName('manage-device-div')[0];
        table = document.createElement('table');
        div0.appendChild(table);
        thead = document.createElement('thead');
        table.appendChild(thead);
        tr = document.createElement('tr');
        thead.appendChild(tr);
        tr.classList.add("heading-upper");
        for (idx = 0; idx < data.devicetitle.length; idx++) {
            th = document.createElement('th');
            th.innerHTML = data.devicetitle[idx];
            tr.appendChild(th);
        }
        tbody = document.createElement('tbody');
        table.appendChild(tbody);
        tbody.classList.add("main-table", "main-body");
        for (idx = 0; idx < data.device.length; idx++) {
            tr = document.createElement('tr');
            tbody.appendChild(tr);
            tr.classList.add("main-table-row");

            td1 = document.createElement('td');
            td1.innerHTML = data.device[idx].assetno;
            tr.appendChild(td1);

            td2 = document.createElement('td');
            td2.innerHTML = data.device[idx].name;
            tr.appendChild(td2);

            td3 = document.createElement('td');
            tr.appendChild(td3);
            ul = document.createElement('ul');
            td3.appendChild(ul);
            ul.classList.add('list-style');
            for (index = 0; index < data.label.length; index++) {
                li1 = document.createElement('li');
                li1.innerHTML = data.label[index];
                li1.innerHTML += data.device[idx].specs[index];
                ul.appendChild(li1);
            }
            td4 = document.createElement('td');
            tr.appendChild(td4);
            divIcon = document.createElement('div');
            tr.appendChild(divIcon);
            divIcon.classList.add('icon-container', 'btn-wrapper');

            editIcon = document.createElement('i');
            divIcon.appendChild(editIcon);
            editIcon.classList.add('edit', 'icon');

            deleteIcon = document.createElement('i');
            divIcon.appendChild(deleteIcon);
            deleteIcon.classList.add('delete', 'icon');
            document.querySelectorAll(".edit")[idx].setAttribute("id", data.device[idx].assetno);
        }
        deleteBtn = document.getElementsByClassName("delete");
        for (idx = 0; idx < deleteBtn.length; idx++) {
            deleteBtn[idx].addEventListener("click", function (event) {
                this.parentElement.parentElement.classList.add("hidden");
            });
        }
        editBtn = document.getElementsByClassName("edit");
        modal = document.getElementById('editDeviceForm');
        manageDeviceForm = document.querySelector('.manage-device-wrapper');
        for (idx = 0; idx < editBtn.length; idx++) {
            editBtn[idx].onclick = function (responseText) {
                manageDeviceForm.classList.add("opacity");
                modal.classList.remove("modal-hide");
                modal.classList.add("modal-z-index");
                assetNo = event.target.id;
                for (idx = 0; idx < data.device.length; idx++) {
                    assetNo = parseInt(assetNo);
                    if (assetNo === data.device[idx].assetno) {
                        document.getElementById("assetNo").value = data.device[idx].assetno;
                        document.getElementById("deviceName").value = data.device[idx].name;
                        document.getElementById("operatingSystem").value = data.device[idx].specs[1];
                        document.getElementById("defaultApplications").value = data.device[idx].specs[2];
                        document.getElementById("deviceBrowser").value = data.device[idx].specs[0];
                    }
                }
            };
        }
        document.addEventListener("keydown", function (event) {
            if (event.keyCode == 27) {
                modal.classList.add("modal-hide");
                manageDeviceForm.classList.remove("opacity");
            }
        });
        document.addEventListener("click", function (event) {
            if (event.target == modal) {
                modal.classList.add("modal-hide");
                manageDeviceForm.classList.remove("opacity");
            }
        });
        document.getElementById("submitBtn").addEventListener("click", function (event) {
            event.preventDefault();
            alert("Changes Saved...!!!!");
            modal.classList.add("modal-hide");
            modal.classList.remove("modal-z-index");
            manageDeviceForm.classList.remove("opacity");
        });
        document.getElementById("cancelBtn").addEventListener("click", function (event) {
            event.preventDefault();
            modal.classList.add("modal-hide");
            modal.classList.remove("modal-z-index");
            manageDeviceForm.classList.remove("opacity");
        }, true);
    }
    return {
        init: init
    };
});
