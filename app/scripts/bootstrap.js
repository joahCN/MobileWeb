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
            .when("/screen/ui_components", {
                templateUrl: "/views/screens/ui_components.html"
            })
            .when("/screen/ui/switch", {
                controller: "screens.switch",
                templateUrl: "/views/screens/ui/switch.html"
            })
            .otherwise({
                redirectTo: "/"
            })
    })
    .run(function($rootScope, $log){
        var lastScreen = {
            originalPath: ""
        };
        var animateClassNameForBack = "slide-out-reverse";
        var animateClassNameForNext = "slide-in";
        $rootScope.$on("$routeChangeStart", function (event, next, current){
            $log.log("Route change start");
            $rootScope.containerAnimateClassName = lastScreen.originalPath === next.originalPath ?
                animateClassNameForBack :
                animateClassNameForNext;
        });
        $rootScope.$on("$routeChangeSuccess", function (event, current, previous){
            $log.log("Route change success");
            lastScreen = previous;
        });
        $rootScope.$on("$routeChangeError", function (){
            $log.log("Route Error!")
        });
    });

// Bootstrap the application.
$(document).ready(function(){
    angular.bootstrap($("body"), [APP_NAME]);
});