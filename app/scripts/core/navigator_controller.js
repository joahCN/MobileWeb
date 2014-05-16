angular.module("rcm.core")
    .controller("NavigationController", [
        "$scope",
        "$location",
        "loader$",
        "$q",
        "$element",
        "$log",
        function ($scope, $location, loader$, $q, $element, $log) {
            $scope.template = {};

            navigate();
            onLocationChange();

            function onLocationChange() {
                $scope.$on("$locationChangeStart", function () {});

                $scope.$on("$locationChangeSuccess", function () {
                    navigate();
                });

                $scope.$watch(function () {
                    return $location.path();
                }, function (newPath, oldPath) {
                    if ($scope.lastPath === newPath) {
                        $scope.animateClassName = "slide-out-reverse";
                    }
                });

                $scope.$on("switchScreen", function(event, data) {
                    var path = parseScreen(data.screen);
                    $location.path(path);
                    $scope.$apply();
                });
            }

            function navigate(path) {
                $scope.lastPath = $location.path();
                loader$.show();
                path = parseScreen(path);
                $scope.template.url = getScreenView(path);
                $location.path(path);
                $scope.animateClassName = "slide-in";
                loader$.hide();
            }

            function parseScreen(screen) {
                var mainScreen = "/main";
                return removePrefixSlash(screen || $location.path());

                function removePrefixSlash(str) {
                    var pattern = /^[\/]+/;
                    pattern.test(str) && str.replace(pattern, "/");
                    return str ? str : mainScreen;
                }
            }

            function getScreenView(screen) {
                return "views/screens" + screen + ".html";
            }
        }
    ]);