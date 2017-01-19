/* 
 * Main Registration Controller
 * 
 * Author:  Alberto Piras (a.piras.ict@gmail.com)
 * 
 */
registrationApp.controller('stepsController',['$scope','$http','sharedService', 'staticPropertiesService', '$location', function ($scope, $http, sharedService, staticPropertiesService, $location) {


    $scope.currentSelected = 1;
    $scope.currentStep = 1;
        console.log("INIT main Registration");
        
        $scope.reg = sharedService;
                   
        $scope.moveNextStep = function (value) {
            console.log("check step: " + value + " ...");
            $scope.currentStep = value;
            $scope.currentSelected = value;
        };
        
        $scope.moveToStep = function (value) {
            console.log("check move to step: " + value + " ...");
            if($scope.reg.checkStep(value)){
                console.log("Permission: Allowed");
                $scope.reg.lockNexts(value);
                $scope.currentSelected = value;
                $scope.currentStep = value;
            }else{
                console.log("Permission: Denied");
            }
        };
        

    }]);
