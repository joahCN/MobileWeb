angular.module("RCM.screens")
    .controller("ScreenUISelectList", function ($scope, registerScreen) {
        console.log("Screen Controller: SelectList");

        registerScreen();

        initScreenHeader();
        initScreenBody();

        function initScreenHeader() {
            $scope.screenHeader = {
                title: "UI - SelectList"
            };
        }

        function initScreenBody() {
            $scope.listItems = [
                {name: "Apple", checked: true},
                {name: "Banana", checked: false}
            ];
            $scope.companyInfo = {
                text: 'company name',
                value: 'ringCentral',
                onClick: function(){
                    alert("You click me!");
                },
                isSingle: true
            };
        }
    });

