define(function () {
    /**
    * @method doAJAX
    * @description - function to make AJAX call to fetch data.
    * @param {string} url 
    * @callback myFunction 
    * @param {string} method GET/POST Default value is GET
    */
    var doAJAX = function (url, myFunction, method) {
        method = method || "GET";
        var xhr;
        if (window.XMLHttpRequest) {
            // code for modern browsers
            xhr = new XMLHttpRequest();
        }
        else {
            // code for IE6, IE5
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xhr.onreadystatechange = function () {
            var state = this.readyState ? this.readyState : this.readystate;
            if (state === 4) {
                if (this.status == 200) {
                    myFunction(xhr.responseText);
                }
                else {
                    console.log("Url does not exist");
                }
            }
        };
        xhr.open(method, url, true);
        xhr.send();
    }

    /**
    * @method addComponent
    * @description - callback function to add components dynamically through Ajax call.
    * @param {string} url 
    * @param {string} selector 
    * @param {function} componentInstance
    */
    var addComponent = function (url, selector, componentInstance) {
        doAJAX(url, function (response) {
            document.querySelector(selector).innerHTML += response;
            if (componentInstance) {
                require([componentInstance], function (componentInstance) {
                    if (typeof componentInstance.init === 'function') {
                        componentInstance.init();
                    }
                });
            }
        });

    }


    /**
    * @method reDirect
    * @description - function to add redirection logic to pages.
    */
    var reDirect = function () {
        if (localStorage.status === "login" && ((window.location.pathname === "/src/pages/login/login.html") || (window.location.pathname === "/src/pages/signup/signup.html"))) {
            window.location.href = "/src/pages/dashboard/dashboard.html";
        }
        else if (localStorage.status !== "login" && window.location.pathname === "/src/pages/signup/signup.html") {
            //Do Nothing and Stay on the Same Page
            //This scenario is an Exception as for the sign up page in logged out state we need to stay on the same page and not redirect it to login
        }
        else if (localStorage.status !== "login" && window.location.pathname !== "/src/pages/login/login.html") {
            window.location.href = "/src/pages/login/login.html";
        }
    }
    loginflag = false;
    /**
    * @method login
    * @description - function to set local storage status as login.
    */
    var login = function () {
        if (window.location.pathname === "/src/pages/signup/signup.html") {
            localStorage.status = "login";
            localStorage.userEmail = document.getElementById("userEmail").value;
            window.location.href = "../../pages/dashboard/dashboard.html";
        }
        else if (window.location.pathname === "/src/pages/login/login.html") {
            doAJAX("../../data/user.json", loginCredentials, "GET");
        }
    }
    /**
    * @method logout
    * @description - function to set local storage status as logout.
    */
    var logout = function () {
        localStorage.status = "logout";
        localStorage.userEmail = "undefined";
        window.location.href = "../../pages/login/login.html";
    }
    /**
    * @method loginCredentials
    * @description - function to validate credentials in Login Page.
    * @param {string} responseText 
    */
    var loginCredentials = function (responseText) {
        var data = JSON.parse(responseText);
        for (var i = 0; i < data.admin.length; i++) {
            if (document.getElementById("userEmail").value === data.admin[i].email) {
                if (document.getElementById("password").value === data.admin[i].password) {
                    localStorage.status = "login";
                    localStorage.userEmail = document.getElementById("userEmail").value;
                    window.location.href = "../../pages/dashboard/dashboard.html";
                    return true;
                }
            }
        }
        document.getElementById("invalid").classList.remove("error-message-hide");
    }
    return {
        doAJAX: doAJAX,
        addComponent: addComponent,
        reDirect: reDirect,
        login: login,
        logout: logout,
        loginCredentials: loginCredentials
    };

});