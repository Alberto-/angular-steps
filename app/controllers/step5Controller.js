registrationApp.controller('step5Controller', ['$scope', '$http', 'sharedService', 'staticPropertiesService', '$locale', function ($scope, $http, sharedService, staticPropertiesService, $locale) {

        $scope.reg = sharedService;
        $scope.utils = staticPropertiesService;
    
        $scope.isSubmitting = false;

        $scope.selectedPrice = $scope.utils.getPriceByKey($scope.reg.community.priceKey);
        $scope.selectedService = $scope.utils.getServiceByKey($scope.reg.community.serviceKey);

        $scope.checkStep5 = function () {
            if ($scope.formStep5.$valid) {
                $scope.submitWizard();
            } else {
                console.error("Form Step5 not valid");
            }
        };

        $scope.submitWizard = function () {
            $scope.isSubmitting = true;
            console.log("Sending form data ...");

            var formData = $scope.reg.createWidzardFinalObject();
            alert(JSON.stringify(formData));
            // $scope.submitRequest();
        };

    
    $scope.submitRequest = function(){
        $scope.reg.sendRequest().success(function (response) {
            $scope.isSubmitting = false;
            console.log("Saving form - success " + response);
            var temp = JSON.parse(response);

            // your code here ...

        }).error(function () {
            console.log("Saving form - error");
            $scope.isSubmitting = false;
        });
        
    }
    
    }]);



