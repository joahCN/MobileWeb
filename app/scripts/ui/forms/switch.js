/**
 * Example:
 * <switch status="on" name="sleep" id="aSwitch"></switch>
 */
angular.module('RCM.ui.forms')
    .directive('switch', function (extractAttrsToScope) {
        return {
            restrict: 'E',
            replace: true,
            scope: true,
            templateUrl: '/views/ui/forms/switch.html',
            compile: function (tElement, tAttrs) {
                if (isChecked(tAttrs.status)) {
                    tElement.addClass('on');
                    tElement.find('input').attr('checked', true);
                }

                return function postLink(scope, elem, attrs) {
                    var checkboxNode = elem.find('input');

                    extractAttrsToScope(scope, attrs, ['name']);

                    scope.on = isChecked(attrs.status) || isChecked(scope.status);

                    elem.on('click', function () {
                        scope.on = !scope.on;
                        scope.$emit('switchStatusChange', scope.on);
                        scope.$apply();
                    });

                    scope.$watch('on', function () {
                        if (scope.on) {
                            elem.attr('status', 'on');
                            checkboxNode.attr('checked', true);
                        } else {
                            elem.attr('status', 'off');
                            checkboxNode.removeAttr('checked');
                        }
                    });
                };

                function isChecked(status) {
                    return status === "on";
                }
            }
        };
    });