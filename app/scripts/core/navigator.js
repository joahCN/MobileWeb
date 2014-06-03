angular.module("RCM.core")
    .factory("navigator$", function ($location) {
        var STORAGE_KEY = "historyStack";
        var historyStack = [];
        var historyStackInStore = window.localStorage.getItem(STORAGE_KEY);
        if (historyStackInStore) {
            historyStack = JSON.parse(historyStackInStore);
        }

        return {
            push: function () {
                historyStack.push({
                    "path": $location.path()
                });
                save();
            },
            pop: function () {
                historyStack.pop();
                save();
            },
            clean: function () {
                historyStack = [];
                save();
            },
            get: function () {
                return historyStack;
            },
            isBack: function () {
                var stackLength = historyStack.length;
                if (stackLength >=2) {
                    var previousHistoryItem = historyStack[historyStack.length - 2];
                }

                if (previousHistoryItem) {
                    return $location.path() === previousHistoryItem.path;
                }
                return false;
            }
        };

        function save() {
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(historyStack));
        }
    });