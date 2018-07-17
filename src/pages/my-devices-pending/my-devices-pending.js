require(['utils'],function(Utils){
    Utils.reDirect();
    Utils.addComponent('../../components/header/header.html', 'header','headerComp');
    Utils.addComponent('../../components/navigation/navigation.html', '#navigation');
    Utils.addComponent('../../components/my-devices/request-pending.html','#devicesPendingTable','requestPendingComp');
    Utils.addComponent('../../components/footer/footer.html', 'footer');
});