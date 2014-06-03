angular.module("RCM.common")
    .directive("screen", function () {
        return {
            restrict: "E",
            transclude: true,
            replace: true,
            template: '<div class="screen" ng-transclude></div>'
        };
    });