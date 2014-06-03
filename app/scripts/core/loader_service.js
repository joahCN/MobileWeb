angular.module("RCM.core")
    .factory("loader$", ["$rootScope", function ($rootScope) {
        var loader = $("#loader");

        return {
            show: function () {
                loader.show();
            },
            hide: function () {
                loader.hide();
            }
        };
    }]);