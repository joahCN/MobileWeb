angular.module("ui.components")
    .directive("tableCell", function () {
        return {
            restrict: "AE",
            replace: true,
            templateUrl: "/scripts/directives/tableCell/tableCell.html",
        };
    });