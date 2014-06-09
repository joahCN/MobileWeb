angular.module("RCM.directives")
    .directive("loader", function ($rootScope) {
        return {
            restrict: "AE",
            replace: true,
            templateUrl: "/views/directives/loader.html",
            link: function postLink(scope, element) {

                $rootScope.$on("loadingStart", function () {
                    element.css({display: 'block'});
                });

                $rootScope.$on("loadingEnd", function () {
                    element.css({display: 'none'});
                });

            }
        };
    });