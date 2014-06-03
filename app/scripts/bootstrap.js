var APP_NAME = "RCM";

angular.module(APP_NAME, [
    "ngRoute",
    "RCM.core",
    "RCM.ui",
    "RCM.common",
    "RCM.screens"
])
    .config(function($locationProvider, $routeProvider) {
        // Use the hashbang mode.
        $locationProvider.hashPrefix('!');

        $routeProvider
            .when("/", {
                controller: "ScreenMain",
                template: "" //angular does not invoke controller if no template provided.
            })
            .when("/screen/:screen*", {
                templateUrl: function (params) {
                    return "/views/screens/" + params.screen + ".html";
                }
            })
            .otherwise({
                redirectTo: "/"
            })
    })
    .run(function($rootScope, $location, $log, navigator$){
        var ANIMATION_CLASS_NAME = {
            BACK: "slide-out-reverse",
            NEXT: "slide-in"
        };

        $rootScope.containerAnimateClassName = ANIMATION_CLASS_NAME.NEXT;

        $rootScope.$on("$routeChangeStart", function (event, next, current) {
            //$log.log("Route change start");
            //$log.log(" - Current route: ", current);
            //$log.log(" - Next route: ", next);
        });

        $rootScope.$on("$routeChangeSuccess", function (event, current, previous) {
            //$log.log("Route change success");
            //$log.log(" - Previous route: ", previous);
            //$log.log(" - Current route: ", current);

            if (navigator$.isBack()) {
                $rootScope.containerAnimateClassName = ANIMATION_CLASS_NAME.BACK;
                navigator$.pop();
            } else {
                $rootScope.containerAnimateClassName = ANIMATION_CLASS_NAME.NEXT;
                navigator$.push();
            }

            //$log.log("History stack: ", navigator$.get());
        });

        $rootScope.$on("$routeChangeError", function () {
            //$log.log("Route Error!")
        });
    });

// Bootstrap the application.
$(document).ready(function(){
    angular.bootstrap($("body"), [APP_NAME]);
});