var APP_NAME = "RCM";

angular.module(APP_NAME, [
    "ngRoute",
    "rcm.core",
    "rcm.ui",
    "rcm.screens"
])
    .config(function($locationProvider, $routeProvider) {
        // Use the hashbang mode.
        $locationProvider.hashPrefix('!');

        $routeProvider
            .when("/", {
                controller: "ScreenMain",
                templateUrl: "/views/screens/main.html"
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
    .run(function($rootScope, $log){
        var animateClassNameForBack = "slide-out-reverse";
        var animateClassNameForNext = "slide-in";

        $rootScope.$on("$routeChangeStart", function (event, next, current) {
            $log.log("Route change start");
            $log.log(" - Current screen: ", current);
            $log.log(" - Next screen: ", next);

            $rootScope.containerAnimateClassName = true ?
                animateClassNameForBack :
                animateClassNameForNext;
        });

        $rootScope.$on("$routeChangeSuccess", function (event, current, previous){
            $log.log("Route change success");
        });

        $rootScope.$on("$routeChangeError", function (){
            $log.log("Route Error!")
        });
    });

// Bootstrap the application.
$(document).ready(function(){
    angular.bootstrap($("body"), [APP_NAME]);
});