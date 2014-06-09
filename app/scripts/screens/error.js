angular.module("RCM.screens")
    .controller("ScreenError", function ($scope) {
        console.log("Screen Controller: Error");

        initScreenHeader();

        function initScreenHeader() {
            var header = {
                title: "Error"
            };

            $scope.screenHeader = angular.extend(header, createLeftButton());
        }

        function createLeftButton() {
            return {
                leftButton: {
                    text: "Back",
                    click: function () {
                        alert("back");
                    }
                }
            }
        }
    });
