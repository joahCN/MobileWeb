angular.module('RCM.screens')
    .controller('ScreenForms', function ($scope, registerScreen){
        console.log("Screen Controller: Forms");

        registerScreen();

        initScreenHeader();

        function initScreenHeader() {
            $scope.screenHeader = {
                title: "Form Elements"
            };
        }
    });