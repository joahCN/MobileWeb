angular.module("RCM.screens")
    .controller("ScreenUIComponents", function ($scope) {
        console.log("Screen Controller: UIComponents");

        initScreenHeader();
        initScreenBody();

        function initScreenHeader() {
            var header = {
                title: "UI Components"
            };

            $scope.screenHeader = header;
        }

        function initScreenBody() {
            $scope.panes = [
                {
                    icon: "/images/ico_payment-method.svg",
                    title: "Switch",
                    screen: "screen/ui/switch"
                },
                {
                    icon: "/images/ico_service-plan.svg",
                    title: "Select List",
                    screen: "screen/ui/select_list"
                }
            ];
        }
    });