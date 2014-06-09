angular.module("RCM.screens")
    .controller("ScreenUIComponents", function ($scope) {
        console.log("Screen Controller: UIComponents");

        $scope.screenTitle = "UI Components";

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
    });