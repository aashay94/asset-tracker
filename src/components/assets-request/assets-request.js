/**
 * define function()
 * dependencies - utils, filterComp,assetsRequestCompTable
 * factory function()
 * @param{object} Utils
 * @param{object} filter
 * @param{object} asset
 * @returns{function} - init
 */

define(['utils', 'filterComp', 'assetsRequestCompTable'], function (Utils, filter, asset) {

    /**
   * @method init
   * @description - To make ajax call to fetch requestedassets json.
   */

    var init = function () {
        var data;
        Utils.doAJAX("../../data/requestedassets.json", displayDevices, "GET");
    }

    /**
            * @method displayDevices
            * @description - callback function to initiate dom creation
            * @param{string} responseText 
            */

    function displayDevices(responseText) {
        data = JSON.parse(responseText);
        filter.init(responseText);
        asset.createAssetTable(data);
    }
    return {
        init: init
    };
});