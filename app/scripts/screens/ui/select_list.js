    angular.module("rcm.screens")
        .controller("screens.selectList", function ($scope) {
            $scope.listItems = [
                {name: "Apple", checked: true},
                {name: "Banana", checked: false}
            ];
        });

