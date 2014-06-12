angular.module('RCM.screens')
    .controller('ScreenForms', function ($scope){
        console.log("Screen Controller: Forms");

        initScreenHeader();

        function initScreenHeader() {
            $scope.screenHeader = {
                title: "Form Elements"
            };
        }
    });