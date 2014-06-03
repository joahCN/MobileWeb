angular.module("RCM.core")
    .factory("sessionService$", function ($q, $timeout) {
        return {
            check: function () {
                var deferred  = $q.defer();
                $timeout(function () {
                    deferred.resolve();
                }, 1000);

                return deferred.promise;
            }
        };
    });