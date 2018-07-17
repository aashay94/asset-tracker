require(['utils'],function(Utils){
    Utils.reDirect();
    Utils.addComponent('../../components/header/header.html', 'header','headerComp');
    Utils.addComponent('../../components/navigation/navigation.html', '#navigation');
    Utils.addComponent('../../components/dashboard/dashboard.html','#dashboard','dashboardComp');
    Utils.addComponent('../../components/footer/footer.html', 'footer');
});