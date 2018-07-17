require(['utils'],function(Utils){
    Utils.reDirect();
    Utils.addComponent('../../components/header/header.html', 'header','headerComp');
    Utils.addComponent('../../components/navigation/navigation.html', '#navigation');
    Utils.addComponent('../../components/upcoming-device-form/upcoming-device-form.html','#upcomingDeviceForm','upcomingDeviceComp');
    Utils.addComponent('../../components/footer/footer.html', 'footer');
});

