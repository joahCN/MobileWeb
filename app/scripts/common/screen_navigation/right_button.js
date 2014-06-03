angular.module("RCM.ui")
    .directive("rightButton", function () {
        return {
            restrict: "E",
            replace: true,
            transclude: true,
            templateUrl: "/views/common/screen_navigation/right_button.html"
        };
    });