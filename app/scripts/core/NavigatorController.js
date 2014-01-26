angular.module("rcm.core")
    .controller("NavigationController", ["$scope", "$location", function ($scope, $location) {
        var screenStack = {};
        var PATH_TO_SCREENS = "scripts/screens/";
        var PATH_TO_SCREENS_VIEWS = "views/screens/";

        $scope.template = {
            url: "views/screens/main.html"
        };

        $scope.$on("$locationChangeStart", function () {

        });

        $scope.$on("$locationChangeSuccess", function () {

        });


        $scope.$on("switchScreen", function(event, data) {
            console.log("Navigator to screen: " + data.screen);
            screenStack[screen] = data.screen;

            // Show loading indicator.
            $("#loader").show();


            require([PATH_TO_SCREENS + data.screen], function (screen) {
                if (!screen) {
                    // ERROR: Request screen doest not exist.
                }

                // Hide loading indicator.
                $("#loader").hide();

                // Switch to the screen.
                $scope.template.url = PATH_TO_SCREENS_VIEWS + data.screen + ".html";
                $scope.$apply();
            });

            $location.url(data.screen);
        });
    }]);