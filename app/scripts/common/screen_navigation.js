angular.module("RCM.common")
    .directive("screenNavigation", function() {
        return {
            restrict: "E",
            transclude: true,
            replace: true,
            templateUrl: "/views/common/screen_navigation.html"
        };
    });