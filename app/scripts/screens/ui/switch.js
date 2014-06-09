angular.module("RCM.screens")
    .controller("ScreenUISwitch", function ($scope) {
        console.log("Screen Controller: Switch");

        initScreenHeader();

        function initScreenHeader() {
            $scope.screenHeader = {
                title: "UI - Switch"
            };
        }

    });

