angular.module("RCM.ui")
    .directive("navigationList", function(){
        return {
            replace: true,
            restrict: "E",
            transclude: true,
            template: '<div ng-transclude></div>',
            link: function(scope, elem, attrs){
                var buttons = angular.element(elem).children();
                if(buttons.length == 1){
                    angular.element(buttons[0]).addClass("onlyBlock");
                } else {
                    angular.element(buttons).addClass("middleBlock");
                    angular.element(buttons[0]).removeClass("middleBlock").addClass("firstBlock");
                    angular.element(buttons[buttons.length-1]).removeClass("middleBlock").addClass("lastBlock");
                }
            }
        }
    });