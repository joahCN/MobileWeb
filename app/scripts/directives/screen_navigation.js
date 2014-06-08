angular.module("RCM.directives")
    .directive("screenNavigation", function() {
        return {
            restrict: "E",
            transclude: true,
            replace: true,
            templateUrl: "/views/directives/screen_navigation.html"
        };
    });