angular.module("RCM.screens")
    .controller("ScreenLogin", function ($http, $scope) {
        console.log("Screen Controller: Login");

        initScreenHeader();

        function initScreenHeader() {
            var header = {
                title: "Account"
            };

            $scope.screenHeader = angular.extend(header, createRightButton());
        }

        function createRightButton() {
            return {
                rightButton: {
                    text: "Login",
                    click: function () {
                        alert("Login...");
                    }
                }
            };
        }

    });