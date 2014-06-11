angular.module("RCM.ui")
    .directive("pane", function ($location, extractAttrsToScope) {
        return {
            restrict: "AE",
            replace: true,
            transclude: true,
            templateUrl: "/views/ui/pane.html",
            link: function (scope, elem, attrs) {
                extractAttrsToScope(scope, attrs, ["label", "icon", "screen"]);

                angular.isDefined(scope.screen) && (scope.hasIndicator = true);

                elem.on("click", function (){
                    $location.path("/" + scope.screen);
                    scope.$apply();
                });
            }
        };
    });