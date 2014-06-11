angular.module("RCM.ui")
    .directive("navigationButton", function(){
        return {
            restrict: 'E',
            replace: true,
            scope: {
                text: '@',
                value: '@',
                onClick: '&',
                single: '@'
            },
            templateUrl: '/views/ui/navigationButton.html',

            link: function(scope, elem, attrs){
                scope.single && angular.element(elem).addClass("onlyBlock");
            }
        }
    });
