angular.module("RCM.ui")
    .directive("editField", function () {
        return {
            restrict: "E",
            replace: true,
            templateUrl: "/views/ui/edit_field.html",
            link: function(scope, element, attrs) {
                angular.forEach(["id", "title", "subTitle", "value"], function (item) {
                    if (angular.isDefined(attrs[item])) {
                        scope[item] = attrs[item];
                    }
                });
            }
        }
    });