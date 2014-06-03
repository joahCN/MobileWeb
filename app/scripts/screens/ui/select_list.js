angular.module("RCM.screens")
    .controller("ScreenControllerSelectList", function ($scope) {
        console.log("Screen Controller: SelectList");

        $scope.listItems = [
            {name: "Apple", checked: true},
            {name: "Banana", checked: false}
        ];
    });

