angular.module("RCM.common")
    .directive("screenAside", function () {
        return {
            restrict: "E",
            transclude: true,
            replace: true,
            templateUrl: "/views/common/screen_aside.html"
        };
    });