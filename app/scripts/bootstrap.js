"use strict";

require.config({
    baseUrl: "",
    paths: {
        "vendor": "bower_components",
        "jquery": "bower_components/jquery/jquery",
        "text": "bower_components/requirejs-text/text"
    }
});

require([
    "jquery",
    "vendor/angular/angular"
], function($){

    // Declare Angular modules of our application.
    angular.module("rcm.core", []);
    angular.module("rcm.ui", []);
    angular.module("rcm.screens", []);


    // TODO: May be we can require these following deps in the first level.
    require([
        "scripts/core/NavigatorController",
        "scripts/common/ui/pane"
    ], function () {

        var APP_NAME = "RCM";

        angular.module(APP_NAME, [
            "rcm.core",
            "rcm.ui",
            "rcm.screens"
        ])
            .config(function($locationProvider) {

                // Use the hashbang mode.
                $locationProvider.hashPrefix('!');
            });

        // Bootstrap the application.
        $(document).ready(function(){
            angular.bootstrap($("body"), [APP_NAME]);
        });
    });
});