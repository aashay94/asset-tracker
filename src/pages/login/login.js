require(['utils'],function(Utils){
    Utils.reDirect();
    Utils.addComponent('../../components/form-title/form-title.html', '#loginTitle');
    Utils.addComponent('../../components/login-form/login-form.html', '#loginForm','loginFormComp');
    Utils.addComponent('../../components/footer/footer.html', 'footer');
});





