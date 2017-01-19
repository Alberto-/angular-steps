registrationApp.controller('step3Controller',['$scope','$http','sharedService', 'staticPropertiesService', '$location', function ($scope, $http, sharedService, staticPropertiesService, $location) {

        $scope.reg = sharedService;
        $scope.utils = staticPropertiesService;

        $scope.namePattern = $scope.utils.namePattern;
        $scope.alphanumericAdvanced = $scope.utils.alphanumericAdvanced;

        // loads country list
        $scope.countryList =  $scope.utils.getCountryList();
        // loads available languages
        $scope.languageList = $scope.utils.getDefaultLanguageList();

        $scope.click = function(id){
            document.getElementById(id).click();
        };

        $scope.checkStep3 = function () {
            console.info("Check to move step4");
            if ($scope.formStep3.$valid ) {
                console.log("Step 4 unlocked");
                $scope.reg.enableStep(4);
                $scope.moveNextStep(4);
            }else{
                console.error("Form Step3 not valid");
            }
        };

    }]);
