angular.module("RCM.directives")
    .directive("screenAside", function () {
        return {
            restrict: "E",
            transclude: true,
            replace: true,
            templateUrl: "/views/directives/screen_aside.html"
        };
    });