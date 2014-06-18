// Declare modules of our application.

var APP_NAME = "RCM";

angular.module("RCM.services", []);
angular.module("RCM.directives", []);
angular.module("RCM.ui", []);
angular.module("RCM.ui.forms", []);
angular.module("RCM.screens", []);
angular.module("RCM.helpers", []);

var mainModule = angular.module(APP_NAME, [
    "ngRoute",

    "RCM.services",
    "RCM.helpers",

    "RCM.directives",
    "RCM.ui",
    "RCM.ui.forms",

    "RCM.screens"
]);