registrationApp.controller('step4Controller',['$scope','$http','sharedService', 'staticPropertiesService', '$location', function ($scope, $http, sharedService, staticPropertiesService, $location) {

    $scope.reg = sharedService;
    $scope.utils = staticPropertiesService;

    $scope.prices = $scope.utils.getPriceList();

    $scope.selectPrice = function(param){
        $scope.reg.community.priceKey = param;
    };

    $scope.checkStep4 = function () {
        console.info("Check to move step5");
        $scope.isSaving = true;
        if ($scope.formStep4.$valid) {
            console.log("Step5 unlocked");
            $scope.reg.enableStep(5);
            $scope.moveNextStep(5);
        }else{
            console.error("Form Step4 not valid");
        }
        $scope.isSaving = false;
    };

}]);
