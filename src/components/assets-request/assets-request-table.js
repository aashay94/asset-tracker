/**
 * define function()
 * factory function()
 * @returns{function} - createAssetTable
 */
define(function () {

    /**
            * @method createAssetTable
            * @description - function containing dom creation logic
            * @param{object} data
            */
    function createAssetTable(data) {
        var tbody = document.getElementsByTagName('tbody')[0];
        var headingRow = document.getElementsByTagName('tbody')[0].rows[0]
        tbody.innerHTML = "";
        tbody.appendChild(headingRow);
        for (var i = 0; i < data.requestedAssets.length; i++) {
            var row = createTableRow();
            tbody.appendChild(row);
            row.appendChild(createTableCell());
            row.lastChild.innerHTML = data.requestedAssets[i].assetno;
            row.appendChild(createTableCell());
            row.lastChild.innerHTML = data.requestedAssets[i].name;

            row.appendChild(createTableCell());
            var ul1 = document.createElement('ul');
            row.lastChild.appendChild(ul1);
            ul1.appendChild(createListItem());
            ul1.lastChild.innerHTML = "Browser : " + data.requestedAssets[i].browser;
            ul1.appendChild(createListItem());
            ul1.lastChild.innerHTML = "Operating System : " + data.requestedAssets[i].os;
            ul1.appendChild(createListItem());
            ul1.lastChild.innerHTML = "Default Apps : " + data.requestedAssets[i].defaultapps;

            row.appendChild(createTableCell());
            ul2 = document.createElement('ul');
            row.lastChild.appendChild(ul2);
            ul2.appendChild(createListItem());

            ul2.lastChild.classList.add("status-text", "status");

            if (data.requestedAssets[i].availability === "available") {
                ul2.lastChild.innerHTML = "AVAILABLE";
                ul2.lastChild.classList.add("good-status");
            }
            else if (data.requestedAssets[i].availability === "unavailable") {
                ul2.lastChild.innerHTML = "UNAVAILABLE";
                ul2.lastChild.classList.add("bad-status");
            }
            ul2.appendChild(createListItem());
            ul2.lastChild.classList.add("bad-status", "secondry-btn", "action-btn");
            ul2.lastChild.innerHTML = "SEND REQUEST";
            ul2.lastChild.addEventListener('click', sendRequest);
        }
    }

     /**
            * @method createTableRow
            * @description - function to create new rows
            * @returns{object}
            */

    function createTableRow() {
        return document.createElement('tr');
    }

     /**
            * @method createTableCell
            * @description - function to create new table cells
            * @returns{object}
            */

    function createTableCell() {
        return document.createElement('td');
    }

    /**
            * @method createListItem
            * @description - function to create new list items
            * @returns{object}
            */
    
    function createListItem() {
        return document.createElement('li');
    }

    /**
            * @method sendRequest
            * @description - functionality not yet defined
            */

    function sendRequest(event) {
        //TODO Once Functionality is defined
    }
    return {
        createAssetTable: createAssetTable
    };
});
