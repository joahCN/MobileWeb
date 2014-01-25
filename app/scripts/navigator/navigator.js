angular.module("rcm.navigator")
    .factory("navigator$", ["$location", function ($location) {
        var screenStack = {};
        function push(screen, data) {
            console.log("Navigator to screen: " + screen);
            screenStack[screen] = data;
            $location.url(screen);
        }

        function pop(screen) {
            console.log("Navigator to screen: " + screen);
        }

        return {
            push: push,
            pop: pop
        };
    }]);