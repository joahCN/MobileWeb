/**
 * RCM.helpers module used to define utility functions.
 * All helpers should be defined as services.
 */
angular.module("RCM.helpers")

    /**
     * Extract specific fields of directive's attrs to scope.
     * @service extractAttrsToScope
     */
    .provider("extractAttrsToScope", function () {
        this.$get = function () {

            /**
             * Extract attributes to scope.
             * @param {Object} attrs
             * @param {Array} fields
             * @return {Object} Available Attributes.
             */
            return function (scope, attrs, fields) {
                angular.forEach(fields, function (field) {

                    // Properties in attrs are all in LOWERCASE.
                    var fieldInLowerCase = field.toLowerCase();
                    if (angular.isDefined(attrs[fieldInLowerCase])) {
                        scope[field] = attrs[fieldInLowerCase];
                    }
                });
            };
        };
    })

    /**
     * Add current screen to screens$ service.
     */
    .provider("registerScreen", function () {
        this.$get = function (screens$) {
            return function() {
                screens$.add();
            }
        };
    });