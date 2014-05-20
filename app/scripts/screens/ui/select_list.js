    angular.module("rcm.screens")
        .controller("ScreenSelectList", function ($scope) {
            console.log("Screen Controller: SelectList");

            $scope.listItems = [
                {name: "Apple", checked: true},
                {name: "Banana", checked: false}
            ];
        });

