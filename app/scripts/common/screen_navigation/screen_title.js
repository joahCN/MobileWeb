angular.module("RCM.common")
    .directive("screenTitle", function () {
        return {
            restrict: "E",
            transclude: true,
            replace: true,
            templateUrl: "/views/common/screen_navigation/screen_title.html"
        };
    });