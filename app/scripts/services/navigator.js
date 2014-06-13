angular.module("RCM.services")
    .factory("navigator$", function ($location, $window) {
        var STORAGE_KEY = "historyStack";
        var storage = $window.localStorage;
        var historyStack = [];
        var historyStackInStore = storage.getItem(STORAGE_KEY);

        try {
            historyStack = JSON.parse(historyStackInStore);
        } catch(e) {}

        return {
            push: function () {
                historyStack.push({
                    "path": $location.path()
                });
                save();
            },

            /**
             * Delete paths from historyStack form index of current path.
             */
            pop: function () {
                var pathIndex = getPathIndex();
                if (pathIndex > -1) {
                    var numberToDelete = historyStack.length - (pathIndex + 1);
                    while(numberToDelete > 0) {
                        historyStack.pop();
                        numberToDelete--;
                    }
                }

                save();
            },

            clean: function () {
                historyStack = [];
                save();
            },

            get: function () {
                return historyStack;
            },

            getStackLength: function () {
                return historyStack.length;
            },

            back: function () {
                var stackLength = historyStack.length;
                var path = '/';
                if (stackLength > 1) {
                    path = historyStack[stackLength - 2].path;
                }
                $location.path(path);
            },

            /**
             * Consider that path in the historyStack as a back action.
             * @returns {boolean}
             */
            isBack: function () {
                return getPathIndex() > -1;
            }
        };

        /**
         * Get index in the historyStack of currentPath
         * @returns {number}
         */
        function getPathIndex() {
            var index = -1;
            var i = historyStack.length - 1;
            var currentPath = $location.path();

            while (i >= 0) {
                if (historyStack[i].path === currentPath) {
                    index = i;
                    return index;
                }
                i--;
            }
            return index;
        }

        function save() {
            storage.setItem(STORAGE_KEY, JSON.stringify(historyStack));
        }
    });