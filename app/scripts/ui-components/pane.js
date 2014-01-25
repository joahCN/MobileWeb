angular.module("rcm.components")
    .directive("pane", ["navigator$", function (navigator$) {
        return {
            restrict: "AE",
            replace: true,
            transclude: true,
            templateUrl: "/views/partials/pane.html",
            scope: {
                label: '=',
                hasIndicator: '=',
                icon: '='
            },
            link: function (scope, elem, attrs) {
                elem.on("click", function (){
                    scope.$apply(function(){
                        navigator$.push("/something", {});
                    });
                });
            }
        };
    }]);