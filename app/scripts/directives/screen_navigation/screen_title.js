angular.module("RCM.directives")
    .directive("screenTitle", function () {
        return {
            restrict: "E",
            transclude: true,
            replace: true,
            templateUrl: "/views/directives/screen_navigation/screen_title.html"
        };
    });