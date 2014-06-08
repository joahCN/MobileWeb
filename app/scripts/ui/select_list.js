angular.module("RCM.ui")
    .directive("selectList", function () {
        return {
            restrict: "EA",
            replace: true,
            templateUrl: "/views/ui/select_list.html",
            scope: {
                items: "=source"
            },
            link: function (scope, elem ,attrs) {
                var items = elem.find("li");
                items.on("click", function () {
                    items.siblings.removeClass("select-list-selected");
                    angular.element(this).addClass("select-list-selected");
                });
            }
        };
    });