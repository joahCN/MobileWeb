angular.module("RCM.directives")
    .directive("screenHeader", function () {
        return {
            restrict: "E",
            replace: true,
            transclude: true,
            scope: true,
            templateUrl: "/views/directives/screen_header.html"
        };
    });