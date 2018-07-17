require(['utils'],function(Utils){
    Utils.reDirect();
    Utils.addComponent('../../components/form-title/form-title.html','#signupTitle');
    Utils.addComponent('../../components/signup-form/signup-form.html','#signupForm','signupComp');
    Utils.addComponent('../../components/invalid-email-id/invalid-email-id.html','#invalidEmailForm');
    Utils.addComponent('../../components/footer/footer.html', 'footer');
});
