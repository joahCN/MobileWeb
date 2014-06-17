angular.module("RCM.directives")
    .directive("screenHeader", function (navigator$) {
        return {
            restrict: "E",
            replace: true,
            transclude: true,
            scope: true,
            templateUrl: "/views/directives/screen_header.html",
            link: function (scope, element, attrs) {
                scope.screenHeader = scope.screenHeader || {};

                createDefaultLeftButton();

                function createDefaultLeftButton() {
                    if (!scope.screenHeader.leftButton) {
                        scope.screenHeader.leftButton = {
                            text: "Back",
                            click: function () {
                                navigator$.back();
                            }
                        };
                    }
                }
            }
        };
    });