angular.module("RCM.ui")
    .directive("pane", function ($location) {
        return {
            restrict: "AE",
            replace: true,
            transclude: true,
            templateUrl: "/views/ui/pane.html",
            scope: {
                label: '=',
                hasIndicator: '=',
                icon: '=',
                screen: "="
            },
            link: function (scope, elem, attrs) {
                elem.on("click", function (){
                    $location.path("/" + scope.screen);
                    scope.$apply();
                });
            }
        };
    });