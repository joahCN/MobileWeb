angular.module("RCM.directives")
    .directive("screenContent", function () {
        return {
            restrict: "E",
            transclude: true,
            replace: true,
            template: '<div id="screenContent" class="screen-content" ng-transclude></div>'
        };
    });