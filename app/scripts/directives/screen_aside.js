angular.module("RCM.directives")
    .directive("screenAside", function () {
        return {
            restrict: "E",
            transclude: true,
            replace: true,
            template: '<div id="screenAside" class="screen-aside" ng-transclude></div>'
        };
    });