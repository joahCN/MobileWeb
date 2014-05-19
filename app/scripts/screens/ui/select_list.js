    angular.module("rcm.screens")
        .controller("ScreenSelectList", function ($scope) {
            $scope.listItems = [
                {name: "Apple", checked: true},
                {name: "Banana", checked: false}
            ];
        });

