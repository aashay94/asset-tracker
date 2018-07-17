/**
 * define function()
 * dependencies - utils
 * factory function()
 * @param {Object} Utils
 * @returns {function} init
 */
define(['utils'],function(Utils){
    /**
     * @method - init
     * @description - function to fetch User data using AJAX Call.
     */
    var init=function(){
        Utils.doAJAX('../../data/user.json',fetchUserData,'GET');
    document.getElementById('logout').addEventListener('click',Utils.logout);
    }
    /**
     * @method - fetchUserData
     * @description - function to display user name and profile picture.
     * @param {string} responseText 
     */
    function fetchUserData(responseText){
        var data=JSON.parse(responseText),
            userEmail=localStorage.userEmail;
        for( var i in data.admin){
            if(data.admin[i].email===userEmail){
                document.getElementsByClassName('account-name')[0].innerHTML=data.admin[i].fname;
                document.getElementsByClassName('account-pic')[0].src=data.admin[i].imgPath;
                document.getElementsByClassName('account-pic')[1].src=data.admin[i].imgPath;
            }
        }
    }
    return{
        init:init
    };
});