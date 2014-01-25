"use strict";

require.config({
    baseUrl: "",
    paths: {
        "vendor": "bower_components",
        "jquery": "bower_components/jquery/jquery"
    }
});

require([
    "jquery",
    "vendor/angular/angular"
], function($){

    // Declare Angular modules of our application.
    angular.module("rcm.components", []);
    angular.module("rcm.screens", []);
    angular.module("rcm.navigator", []);

    // TODO: May be we can require these following deps in the first level.
    require([
        "scripts/navigator/navigator",
        "scripts/ui-components/pane"
    ], function () {

        var APP_NAME = "RCM";

        angular.module(APP_NAME, [
            "rcm.navigator",
            "rcm.components",
            "rcm.screens"
        ])
            .config(function($locationProvider) {

                // Use the hashbang mode.
                $locationProvider.hashPrefix('!');
            })

            .run(function($rootScope){
                $rootScope.$on("$locationChangeStart", function () {
                    console.log("Will show loading...");
                });

                $rootScope.$on("$locationChangeSuccess", function () {
                    console.log("Location Changed.");
                });
            })
        ;

        // Bootstrap the application.
        $(document).ready(function(){
            angular.bootstrap($("body"), [APP_NAME]);
        });
    });
});