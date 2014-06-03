angular.module("RCM.screens")
    .controller("ScreenLogin", ["$http", "$log", "$scope", function ($http, $log, $scope) {
        $log.log("Screen Controller: Login");

        $scope.login = function () {
            alert("Login...");
        };
    }]);