require(['utils'],function(Utils){
    Utils.reDirect();
    Utils.addComponent('../../components/header/header.html', 'header','headerComp');
    Utils.addComponent('../../components/navigation/navigation.html', '#navigation');
    Utils.addComponent('../../components/filter/filter.html', '#assetsRequestFilter','filterComp');
    Utils.addComponent('../../components/assets-request/assets-request.html', '#assetsRequestTable','assetsRequestComp');
    Utils.addComponent('../../components/footer/footer.html', 'footer');
});