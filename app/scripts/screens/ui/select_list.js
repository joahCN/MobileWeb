angular.module("RCM.screens")
    .controller("ScreenUISelectList", function ($scope) {
        console.log("Screen Controller: SelectList");

        initScreenHeader();
        initScreenBody();

        function initScreenHeader() {
            $scope.screenHeader = {
                title: "UI - SelectList"
            };
        }

        function initScreenBody() {
            $scope.listItems = [
                {name: "Apple", checked: true},
                {name: "Banana", checked: false}
            ];
        }
    });

