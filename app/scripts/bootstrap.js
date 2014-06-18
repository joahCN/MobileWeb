mainModule
    .config(function($locationProvider, $routeProvider) {
        // Use the hashbang mode.
        $locationProvider.hashPrefix('!');

        $routeProvider
            .when("/", {
                controller: "ScreenMain",
                templateUrl: "/views/screens/loading.html"
                // templateUrl Required here to make the loader directive
                // initialized first.
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

        $rootScope.screenAnimationClass = ANIMATION_CLASS_NAME.NEXT;

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
                $rootScope.screenAnimationClass = ANIMATION_CLASS_NAME.BACK;
                navigator$.pop();
            } else {
                $rootScope.screenAnimationClass = ANIMATION_CLASS_NAME.NEXT;
                navigator$.push();
            }
        });

        $rootScope.$on("$routeChangeError", function () {
            //$log.log("Route Error!")
        });
    });

// Bootstrap the application.
angular.element(document).ready(function(){
    angular.bootstrap(document, [APP_NAME]);
});