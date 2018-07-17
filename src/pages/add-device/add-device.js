require(['utils'],function(Utils){
    Utils.reDirect();
    Utils.addComponent('../../components/header/header.html', 'header','headerComp');
    Utils.addComponent('../../components/navigation/navigation.html', '#navigation');
    Utils.addComponent('../../components/add-device-form/add-device-form.html', '#addDeviceForm', 'addDeviceComp');
    Utils.addComponent('../../components/footer/footer.html', 'footer');
});