angular.module("RCM.screens")
    .controller("ScreenMailboxInfo", function ($scope, registerScreen) {
        console.log("Screen Controller: MailboxInfo");

        registerScreen();

        initScreenHeader();
        initScreenBody();

        function initScreenHeader() {
            var header = {
                title: "MailboxInfo"
            };

            $scope.screenHeader = angular.extend(header, createScreenLeftButton());
        }

        function initScreenBody() {
            $scope.panes = [
                {
                    icon: "/images/ps_company_number.svg",
                    title: "User Info",
                    label: "test",
                    screen: "screen/ui_components"
                },
                {
                    icon: "/images/ps_auto_receptionist.svg",
                    title: "Screening, Greeting & Hold Music",
                    label: "test",
                    screen: "screen/ui_components"
                },
                {
                    icon: "/images/record.svg",
                    title: "UI Components",
                    label: "",
                    screen: "screen/ui_components"
                }
            ];
        }

        /**
         * @returns {{leftButton: {text: string, click: click}}}
         */
        function createScreenLeftButton () {
            return {
                leftButton: {
                    text: "logout",
                    click: function () {
                        alert("logout");
                    }
                }
            };
        }
    });
