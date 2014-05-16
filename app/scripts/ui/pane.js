angular.module("rcm.ui")
    .directive("pane", function () {
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
                    scope.$emit("switchScreen", {
                        screen: scope.screen,
                        next: true
                    });
                });
            }
        };
    });