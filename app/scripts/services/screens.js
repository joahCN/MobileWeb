angular.module("RCM.services")

    /**
     * A service used for storing all screens.
     * Use #add to register new screen.
     */
    .service("screens$", function ($location) {
        var screens = {
            '/main': '/main',
            '/error': '/error'
        };

        return {
            /**
             * Detect if #screen exists.
             * @param screen
             * @returns {boolean}
             */
            exist: function (screen) {
                for (var p in screens) {
                    if (screens.hasOwnProperty(p)) {
                        if (screens[p] === screen) {
                            return true;
                        }
                    }
                }
            },

            /**
             * Register New Screen.
             * @param screen
             */
            add: function (screen) {
                screen = screen || $location.path();
                screens[screen] = screen;
            },

            /**
             * Default Main Screen.
             */
            main: screens.main,

            /**
             * Default Error Screen.
             */
            error: screens.error
        };
    });