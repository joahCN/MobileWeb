angular.module("RCM.ui")
    .directive("pane", function ($location) {
        return {
            restrict: "AE",
            replace: true,
            transclude: true,
            templateUrl: "/views/ui/pane.html",
            link: function (scope, elem, attrs) {

                angular.forEach(["label", "icon", "screen"], function (item) {
                    if (angular.isDefined(attrs[item])) {
                        scope[item] = attrs[item];
                    }
                });

                angular.isDefined(scope.screen) && (scope.hasIndicator = true);

                elem.on("click", function (){
                    $location.path("/" + scope.screen);
                    scope.$apply();
                });
            }
        };
    });