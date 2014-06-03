angular.module("RCM.common")
    .directive("screenContent", function () {
        return {
            restrict: "E",
            transclude: true,
            replace: true,
            templateUrl: "/views/common/screen_content.html"
        };
    });