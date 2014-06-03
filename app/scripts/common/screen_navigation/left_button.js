angular.module("RCM.ui")
    .directive("leftButton", function () {
        return {
            restrict: "E",
            replace: true,
            transclude: true,
            templateUrl: "/views/common/screen_navigation/left_button.html"
        };
    });