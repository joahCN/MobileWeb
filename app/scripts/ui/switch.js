/**
 * Example:
 * <switch on name="sleep" id="aSwitch"></switch>
 */
angular.module("RCM.ui")
    .directive("switch", function () {
        return {
            restrict: "E",
            replace: true,
            templateUrl: "/views/ui/switch.html",
            scope: {
                name: "=",
                onSwitch: "&"
            },
            compile: function (tElement, tAttrs, transclude) {
                if (tAttrs.on) {
                    tElement.addClass("on");
                    tElement.find("input").attr("checked", true);
                }

                return function postLink(scope, elem, attrs) {
                    scope.on = attrs.on != null;

                    elem.on("click", function () {
                        var checkbox = elem.find("input");
                        scope.on = !scope.on;
                        scope.on ? checkbox.attr("checked", true) : checkbox.removeAttr("checked");
                        scope.$apply();
                    });
                };
            }
        };
    });