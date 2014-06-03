angular.module("RCM.screens")
    .controller("ScreenMain", function ($scope, $location,  sessionService$, loader$) {
        console.log("Screen Controller: Main");

        loader$.show();

        var checkPromise = sessionService$.check();
        checkPromise.then(
            function onSuccess() {
                console.log("login success");
                loader$.hide();
                $location.path("/screen/mailboxInfo");
            },
            function onFailed() {
                console.log("login failed");
                loader$.hide();
                $location.path("/screen/login");
            }
        );
    });