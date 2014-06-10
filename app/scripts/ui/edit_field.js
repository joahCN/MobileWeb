angular.module("RCM.ui")
    .directive("editField", function (extractAttrsToScope) {
        return {
            restrict: "E",
            replace: true,
            templateUrl: "/views/ui/edit_field.html",
            link: function(scope, element, attrs) {
                extractAttrsToScope(scope, attrs, ["id", "title", "subTitle", "value"]);
            }
        }
    });