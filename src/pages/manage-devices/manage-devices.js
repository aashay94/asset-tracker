require(['utils'],function(Utils){
    Utils.reDirect();
    Utils.addComponent('../../components/header/header.html', 'header','headerComp');
    Utils.addComponent('../../components/navigation/navigation.html', '#navigation');
    Utils.addComponent('../../components/manage-devices/manage-devices.html','#manageDevicesTable','manageDevicesComp');
    Utils.addComponent('../../components/edit-device-form/edit-device-form.html','#editDeviceForm');
    Utils.addComponent('../../components/footer/footer.html', 'footer');
});
