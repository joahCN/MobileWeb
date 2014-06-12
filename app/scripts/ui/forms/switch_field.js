angular.module('RCM.ui.forms')
    .directive('switchField', function (extractAttrsToScope) {
        return {
            restrict: 'E',
            replace: true,
            scope: true,
            templateUrl: '/views/ui/forms/switch_field.html',
            link: function (scope, element, attrs) {
                extractAttrsToScope(scope, attrs, ['id', 'title', 'subTitle', 'status']);

                scope.on = scope.status === 'on';

                scope.$on('switchStatusChange', function (event, status) {
                    scope.on = !!status;
                    event.stopPropagation();
                });
            }
        };
    });