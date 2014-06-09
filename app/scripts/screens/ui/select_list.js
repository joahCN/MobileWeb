angular.module("RCM.screens")
    .controller("ScreenUISelectList", function ($scope) {
        console.log("Screen Controller: SelectList");

        $scope.screenTitle = "UI - SelectList";

        $scope.listItems = [
            {name: "Apple", checked: true},
            {name: "Banana", checked: false}
        ];
    });

