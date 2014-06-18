angular.module("RCM.screens")
    .controller("ScreenLogin", function ($http, $scope, registerScreen) {
        console.log("Screen Controller: Login");

        registerScreen();

        initScreenHeader();
        initScreenContent();

        function initScreenHeader() {
            var header = {
                title: "Account"
            };

            $scope.screenHeader = angular.extend(header, createRightButton());
        }

        function initScreenContent() {
            $scope.editFields = [
                {
                    id: "login",
                    title: "Phone Number",
                    value: "",
                    required: true
                },
                {
                    id: "pin",
                    title: "Extension",
                    value: "",
                    required: false
                },
                {
                    id: "password",
                    title: "Password",
                    value: "",
                    required: true
                }
            ];
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