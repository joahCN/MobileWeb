angular.module("rcm.ui")
    .directive("selectList", function () {
        return {
            restrict: "EA",
            replace: true,
            templateUrl: "/views/partials/select_list.html",
            scope: {
                items: "=source"
            },
            link: function (scope, elem ,attrs) {
                var items = elem.find("li");
                items.on("click", function () {
                    items.siblings.removeClass("select-list-selected");
                    $(this).addClass("select-list-selected");
                });
            }
        };
    });