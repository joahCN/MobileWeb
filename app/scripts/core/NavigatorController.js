angular.module("rcm.core")
    .controller("NavigationController", [
        "$scope", "$location", "loader$", "$q", "$element", "$log",
        function ($scope, $location, loader$, $q, $element, $log) {
        var defaultScreen = "/main";
        var errorScreen = "/error";
        var screenStatck = [];
        var retryCount = 0;
        var contentWrapper = $element.find("#content");

        init();
        navigator();

        function init() {
            $scope.template = {
                url: getScreenViewPath(defaultScreen)
            };
        }

        function navigator() {
            $scope.$on("$locationChangeStart", function () {});

            $scope.$on("$locationChangeSuccess", function () {

                navigate($location.path() || defaultScreen);
            });

            $scope.$on("switchScreen", function(event, data) {
                $location.url(data.screen);
                $scope.$apply();
            });
        }

        function navigate(screenName) {
            $scope.template.url = getScreenViewPath("/blank");
            contentWrapper.addClass("slide-in");
            loader$.show();
            screenName = !screenName ? errorScreen : (screenName === "/" ? defaultScreen : screenName);
            var templateFile = getScreenViewPath(screenName);
            $scope.template.url = templateFile;
            $location.url(screenName);
            loader$.hide();
            //var deferred = $q.defer();
            /*
            require([
                getScreenControllerPath(screenName),
                "text!" + templateFile
            ], function (screenInfo) {
                loader$.hide();

                $scope.template.url = templateFile;
                $location.url(screenName);
                renderScreenTitle(screenInfo.title);
                renderLeftButton();
                renderRightButton();


                $scope.$apply(function () {
                    deferred.resolve();
                });

                deferred.promise.then(function () {
                    setTimeout(function () {
                        contentWrapper.removeClass("slide-in");
                    }, 2000);
                });

            }, function (err) {
                $log.error("Error:", err);
                loader$.hide();

                if (isScriptError() && retryCount <= 3) {
                    navigate(errorScreen);
                    retryCount++;
                }


                function isScriptError() {
                    return err.requireType === "scripterror";
                }
            });
            */

            function renderScreenTitle(title) {
                $("#navigationBar").html(title);
            }
            function renderLeftButton(text, callback) {

            }
            function renderRightButton(text, callback) {

            }
        }

        function getScreenControllerPath(screen) {
            return "scripts/screens" + screen;
        }

        function getScreenViewPath(screen) {
            return "views/screens" + screen + ".html";
        }
    }]);