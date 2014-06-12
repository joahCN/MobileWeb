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
                    icon: "/images/edit_dep_menu_info.svg",
                    title: "Form Elements",
                    screen: "screen/ui/forms"
                },
                {
                    icon: "/images/ico_service-plan.svg",
                    title: "Select List",
                    screen: "screen/ui/select_list"
                }
            ];
        }
    });