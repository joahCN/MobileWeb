angular.module("RCM.services")
    .factory("sessionService$", function ($q, $timeout) {
        return {
            check: function () {
                var deferred  = $q.defer();
                $timeout(function () {
                    deferred.resolve();
                }, 3000);

                return deferred.promise;
            }
        };
    });