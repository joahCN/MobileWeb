angular.module("RCM.screens")
    .controller("ScreenMain", function ($scope, $location, sessionService$) {
        console.log("Screen Controller: Main");

        $scope.$emit("loadingStart");

        var checkPromise = sessionService$.check();
        checkPromise.then(
            function onSuccess() {
                console.log("login success");
                $scope.$emit("loadingEnd");
                $location.path("/screen/mailboxInfo");
            },
            function onFailed() {
                console.log("login failed");
                $scope.$emit("loadingEnd");
                $location.path("/screen/login");
            }
        );
    });