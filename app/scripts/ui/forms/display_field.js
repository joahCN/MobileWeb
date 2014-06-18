angular.module("RCM.ui.forms")
    .directive("displayField", function(extractAttrsToScope) {
        return {
            restrict: 'E',
            replace: true,
            scope: true,
            templateUrl: '/views/ui/forms/display_field.html',
            link: function (scope, element, attrs) {
                extractAttrsToScope(scope, attrs, ["id", "title", "subTitle", "value"]);
            }
        };
    });