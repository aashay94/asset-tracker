/**
 * define function()
 * dependencies - assetsRequestCompTable
 * factory function()
 * @param asset
 * @returns{function} - init
 */
define(['assetsRequestCompTable'], function (asset) {
    var checkboxList = document.getElementsByClassName('filter-check');
    /**
 * @method init
 * @description - To initialize the functionalities of add-device form.
 */
    var init = function (responseText) {
        if (screen.width < 640) {
            document.getElementById("filter-categories").style.display = "none";
            document.getElementById("filter-button").addEventListener("click", filterToggle);
        }
        if (responseText !== undefined) {
            for (var i = 0; i < checkboxList.length; i++) {
                checkboxList[i].addEventListener("click", function () { filterData(responseText); });
            }
        }
    }

    /**
           * @method checkDuplicate
           * @description - function to detect the repeating rows in the newly filtered data set
           * @param{object} data - this stores the data from the JSON at the time of page load
           * @param{object} newdata - this is the newly created data set for the filtered results
           * @param{object} matchIndex - this stores the row of data where the filter function has found a match
           */

    function checkDuplicate(data, newdata, matchIndex) {
        for (var i = 0; i < newdata.requestedAssets.length; i++) {
            if (newdata.requestedAssets[i].assetno === data.requestedAssets[matchIndex].assetno) {
                return 0;
            }
        }
        return 1;
    }
    /**
       * @method filterData
       * @description - function to filter the data on the basis of checked checkboxes
       * @param{string} responseText - data fetched from the JSON at the time of page load 
       */
    function filterData(responseText) {
        var devices = document.getElementById("devices").elements;
        var browsers = document.getElementById("browsers").elements;
        var os = document.getElementById("os").elements;
        var data = JSON.parse(responseText);
        var newdata = {
            "requestedAssets": []
        };
        var k = 0;
        for (var i = 0; i < checkboxList.length; i++) {
            if (checkboxList[i].checked) {
                checkboxList[i].nextElementSibling.classList.add("checked-box");
                var parentId = checkboxList[i].parentElement.parentElement.parentElement.id;
                if (parentId === "devices") {
                    for (var j = 0; j < data.requestedAssets.length; j++) {
                        if (checkboxList[i].value === data.requestedAssets[j].name) {
                            var duplicateFlag = checkDuplicate(data, newdata, j);
                            if (duplicateFlag === 1) {
                                newdata.requestedAssets[k] = (data.requestedAssets[j]);
                                k++;
                            }
                        }
                    }
                }
                else if (parentId === "browsers") {
                    for (var j = 0; j < data.requestedAssets.length; j++) {
                        for (var l = 0; l < data.requestedAssets[j].browser.length; l++) {
                            if (checkboxList[i].value === data.requestedAssets[j].browser[l]) {
                                var duplicateFlag = checkDuplicate(data, newdata, j);
                                if (duplicateFlag === 1) {
                                    newdata.requestedAssets[k] = (data.requestedAssets[j]);
                                    k++;
                                }
                            }
                        }
                    }
                }
                else if (parentId === "os") {
                    for (var j = 0; j < data.requestedAssets.length; j++) {
                        if (checkboxList[i].value === data.requestedAssets[j].os) {
                            var duplicateFlag = checkDuplicate(data, newdata, j);
                            if (duplicateFlag === 1) {
                                newdata.requestedAssets[k] = (data.requestedAssets[j]);
                                k++;
                            }
                        }
                    }
                }
            }
            else {
                checkboxList[i].nextElementSibling.classList.remove("checked-box");
            }
        }
        var filselect = 0;
        for (i = 0; i < checkboxList.length; i++) {
            if (checkboxList[i].checked) {
                filselect++;
            }
        }
        filselect === 0 ? asset.createAssetTable(data) : asset.createAssetTable(newdata);
    }
    function filterToggle(x) {
        var filter = document.getElementById("filter-categories");
        if (filter.style.display === "none") {
            filter.style.display = "block";
        }
        else {
            filter.style.display = "none";
        }
    }
    return {
        init: init
    };
});