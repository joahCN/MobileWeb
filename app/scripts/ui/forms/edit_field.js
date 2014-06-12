angular.module("RCM.ui.forms")
    .directive("editField", function (extractAttrsToScope) {
        return {
            restrict: "E",
            replace: true,
            scope: true,
            templateUrl: "/views/ui/forms/edit_field.html",
            link: function(scope, element, attrs) {
                extractAttrsToScope(scope, attrs, ["id", "title", "subTitle", "value"]);
            }
        }
    });