angular.module('RCM.services')
    .factory('navigator$', function ($location, screens$) {
        var historyStack = getHistoryStack();
        historyStack.load();

        return {

            /**
             * Push #path into history stack.
             * @param {String} path
             */
            push: function (path) {
                path = path || $location.path();
                historyStack.push({'path': path});
            },

            /**
             * Delete paths after current path.
             */
            pop: function () {
                var currentPath = $location.path();
                if (historyStack.exist(currentPath)) {
                    var pathIndex = historyStack.lastIndexOf(currentPath);
                    var numberToDelete = historyStack.size() - (pathIndex + 1);
                    while (numberToDelete > 0) {
                        historyStack.pop();
                        numberToDelete--;
                    }
                }
            },

            /**
             * Delete all screens in the history stack.
             */
            clean: function () {
                historyStack.clean();
            },

            /**
             * Go to the specific screen.If path does not exist, go main screen.
             * @param {String} path
             */
            go: function (path) {
                $location.path(parsePath());

                function parsePath() {
                    return screens$.exist(path) ? path : screens$.error;
                }
            },

            /**
             * Go to previous screen.
             */
            back: function () {
                this.go(historyStack.getPreviousPath());
            },

            /**
             * Consider that path in the historyStack as a back action.
             * @returns {boolean}
             */
            isBack: function () {
                return historyStack.exist($location.path());
            }
        };

        function getHistoryStack() {
            var STORAGE_KEY = "MWHistoryStack";

            var self = {
                load: function () {
                    this.stack = isSessionStorageAvailable() ?
                        getStackFromSessionStorage() :
                        [];

                    function getStackFromSessionStorage() {
                        try {
                            var historyStackInStore = sessionStorage.getItem(STORAGE_KEY);
                            return angular.fromJson(historyStackInStore) || [];
                        } catch (e) {
                            return [];
                        }
                    }
                },
                save: function () {
                    try {
                        sessionStorage.setItem(STORAGE_KEY, angular.toJson(this.stack));
                    } catch(e) {}
                },

                clean: function () {
                    this.stack = [];
                },

                push: function (obj) {
                    this.stack.push(obj);
                    this.save();
                },

                pop: function () {
                    var lastItem = this.stack.pop();
                    this.save();

                    return lastItem;
                },

                indexOf: function (obj) {
                    for (var i = 0; i < this.size(); i++) {
                        var objectInStack = this.stack[i];
                        if (angular.equals(obj, objectInStack)) {
                            return i;
                        }
                    }
                    return -1;
                },

                lastIndexOf: function (path) {
                    for (var i = this.size() - 1; i >= 0; i--) {
                        var objectInStack = this.stack[i];
                        if (objectInStack.path === path) {
                            return i;
                        }
                    }
                    return -1;
                },

                exist: function (path) {
                    return this.lastIndexOf(path) > -1;
                },

                getPath: function(path) {
                    return this.exist(path) ? this.lastIndexOf(path) : screens$.main;
                },

                getPreviousPath: function () {
                    return this.size() > 1 ? this.stack[this.size() - 2].path : screens$.main;
                },

                size: function () {
                    return this.stack.length;
                }
            };

            self.load();

            return self;

            function isSessionStorageAvailable() {
                return navigator.cookieEnabled && window.sessionStorage;
            }
        }
    });