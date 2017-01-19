registrationApp.controller('step1Controller',['$scope','$http','sharedService', 'staticPropertiesService', '$location', function ($scope, $http, sharedService, staticPropertiesService, $location) {

        $scope.reg = sharedService;
        $scope.utils = staticPropertiesService;
        $scope.namePattern = $scope.utils.namePattern;
        $scope.emailPattern = $scope.utils.emailPattern;
        $scope.datePattern = $scope.utils.datePattern;
    
        
        $scope.checkStep1 = function () {
            console.info("Check to move step2");
            if ($scope.formStep1.$valid) {
                console.log("Step2 unlocked");
                $scope.reg.enableStep(2);
                $scope.moveNextStep(2);
            }else{
                console.error("Form Step1 not valid");
            }
        };

    }]);

