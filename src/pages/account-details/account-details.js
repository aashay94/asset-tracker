require(['utils'],function(Utils){
    Utils.reDirect();
    Utils.addComponent('../../components/header/header.html', 'header','headerComp');
    Utils.addComponent('../../components/navigation/navigation.html', '#navigation');
    Utils.addComponent('../../components/account-details-form/account-details-form.html', '#accountDetailsForm','accountDetailsComp');
    Utils.addComponent('../../components/footer/footer.html', 'footer');
});
