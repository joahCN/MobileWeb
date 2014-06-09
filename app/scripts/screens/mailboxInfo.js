angular.module("RCM.screens")
    .controller("ScreenMailboxInfo", function ($scope) {
        console.log("Screen Controller: MailboxInfo");

        $scope.screenTitle = "MailboxInfo";
        $scope.logout = function () {
            alert("logout");
        };

        $scope.test = "1";

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
    });
