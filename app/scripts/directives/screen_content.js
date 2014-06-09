angular.module("RCM.directives")
    .directive("screenContent", function () {
        return {
            restrict: "E",
            transclude: true,
            replace: true,
            templateUrl: "/views/directives/screen_content.html"
        };
    });