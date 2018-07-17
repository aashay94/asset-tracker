require(['utils'],function(Utils){
    Utils.reDirect();
    Utils.addComponent('../../components/header/header.html', 'header','headerComp');
    Utils.addComponent('../../components/navigation/navigation.html', '#navigation');
    Utils.addComponent('../../components/device-history/device-history.html','#deviceHistoryTable','deviceHistoryComp');
    Utils.addComponent('../../components/footer/footer.html', 'footer');
});



