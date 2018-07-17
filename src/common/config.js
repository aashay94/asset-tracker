requirejs.config({
    baseUrl:'../../',
    //libraries and /scripts to  comes here
    paths: {
        utils: 'scripts/utils',
        formValidation:'scripts/formValidation',
        accountDetailsComp: 'components/account-details-form/account-details-form',
        addDeviceComp: 'components/add-device-form/add-device-form',
        assetsRequestComp: 'components/assets-request/assets-request',
        assetsRequestCompTable : 'components/assets-request/assets-request-table',
        dashboardComp: 'components/dashboard/dashboard',
        deviceHistoryComp: 'components/device-history/device-history',
        footerComp: 'components/footer/footer',
        formTitleComp: 'components/form-title/form-title',
        headerComp: 'components/header/header',
        loginFormComp: 'components/login-form/login-form',
        lostDeviceComp: 'components/lost-device-form/lost-device-form',
        manageDevicesComp: 'components/manage-devices/manage-devices',
        myDevicesComp: 'components/my-devices/my-devices',
        navigationComp: 'components/navigation/navigation',
        signupComp: 'components/signup-form/signup-form',
        upcomingDeviceComp: 'components/upcoming-device-form/upcoming-device-form',
        filterComp: 'components/filter/filter',
        requestDevicesComp: 'components/my-devices/request-devices',
        requestPendingComp: 'components/my-devices/request-pending',
        requestDeniedComp: 'components/my-devices/request-denied',
        accountDetails: 'pages/account-details/account-details',
        addDevice: 'pages/add-device/add-device',
        assetsRequest: 'pages/asset-request/assets-request',
        dashboard: 'pages/dashboard/dashboard',
        deviceHistory: 'pages/device-history/device-history',
        editDevice: 'pages/edit-device/edit-device',
        login: 'pages/login/login',
        lostDevice: 'pages/lost-devices/lost-devices',
        manageDevices: 'pages/manage-devices/manage-devices',
        myDevicesPending: 'pages/my-devices-pending/my-devices-pending',
        myDevicesRequest: 'pages/my-devices-request/my-devices-request',
        signup: 'pages/signup/signup',
        upcomingDevice: 'pages/upcoming-device/upcoming-device',
    }   
});