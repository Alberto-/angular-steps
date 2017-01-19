registrationApp.controller('step2Controller',['$scope','$http','sharedService', 'staticPropertiesService', '$location', function ($scope, $http, sharedService, staticPropertiesService, $location) {
        
        $scope.reg = sharedService;
        $scope.utils = staticPropertiesService;

        $scope.selectService = function(param){
            $scope.reg.community.serviceKey = param;
        };
        
        $scope.services = $scope.utils.getServiceList();

        $scope.checkStep2 = function () {
              console.info("Check to move step3");
            $scope.isSaving = true;
            if ($scope.formStep2.$valid) {
                console.log("Step3 unlocked");
                $scope.reg.enableStep(3);
                $scope.moveNextStep(3);
            }else{
                console.error("Form Step2 not valid");
            }
            $scope.isSaving = false;
        };
        
    }]);
