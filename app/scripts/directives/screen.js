angular.module("RCM.directives")
    .directive("screen", function () {
        return {
            restrict: "E",
            transclude: true,
            replace: true,
            scope: true,
            template: '<div class="screen"></div>',
            link: function (scope, element, attrs, ctrl, transcludeFn) {

                // transclude option create a sibling scope of the directive.
                // http://stackoverflow.com/questions/22575424/angularjs-ng-controller-on-directive-does-not-work-on-transcluded-elements-withi
                transcludeFn(scope, function(clone) {
                    element.append(clone);
                });
            }
        };
    });