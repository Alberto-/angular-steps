registrationApp.service('staticPropertiesService',['$http', function ($http) {
   
        this.passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})$/;
        this.emailPattern = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
        this.namePattern = /^[a-zA-Z ]+$/;
        this.datePattern = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/[0-9]{4}$/;
        this.alphanumeric =/^[a-zA-Z0-9]+$/;
        this.alphanumericAdvanced =/^[a-zA-Z0-9.-]+$/;

        var countryList = [{
                id: "it",
                value: "Italy"
            },
            {
                id: "fr",
                value: "France"
            },
            {
                id: "de",
                value: "Germany"
            },
            {
                id: "sp",
                value: "Spain"
            },
            {
                id: "uk",
                value: "UK"
            }];


        var prices = [
            {
                description:"basic",
                price: 9,
                content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                key:"basic_price",
                id:1
            },
            {
                description:"standard",
                price: 25,
                content:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
                key:"standard_price",
                id:2
            },
            {
                description:"premium",
                price: 75,
                content:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
                key:"premium_price",
                id:3
                
            }
        ];
    
    
     var services = [
            {
                description:"Service n 1",
                content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                icon:"cloud",
                key:"service1",
                id:8
            },
            {
                description:"Service n 2",
                content:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
                icon:"headset",
                key:"service2",
                id:11
            },
            {
                description:"Service n 3",
                content:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
                icon:"build",
                key:"service3",
                id:7
            }
        ];
    
    
        var languageList = [
            {
                code:"en_GB",
                name:"English",
                id:1
            },
            {
                code:"it_IT",
                name:"Italiano",
                id:2
            }
        ];
    
        function findJSONByKey(jsonArray,param){
            for(var i = 0; i <  jsonArray.length; i++)
            {
                if(jsonArray[i].id == param)
                {
                    return jsonArray[i]
                }
            };
        }
        
        this.getCountryList = function () {
            return countryList;
        },
        
        this.getDefaultLanguageList = function () {
            return languageList;
        },
        
        this.getLanguageList = function () {
            return $http.get(this.getApiPath()+ "Languages")
        },

        this.getPriceList = function () {
            return prices;
        },
        
        this.getServiceList = function () {
            return services;
        },
        
        this.getServiceByKey = function (key) {
            return findJSONByKey(services,key);
        },
        
        this.getPriceByKey = function (key) {
            return findJSONByKey(prices,key);
        },
        
        this.getApiPath = function () {
            return CurrentHost.getPortal() + "/yourAPIpath/";
        };

    }]);

registrationApp.factory('sharedService', ['$http', function ($http) {
        
        var service = {};
        
        service.steps = {
            1:true,
            2:false,
            3:false,
            4:false,
            5:false
        };
        
        service.getSteps = function(){
            return service.steps;
        }
        
        service.checkStep = function(param){
            return service.steps[param];
        }
   
        service.enableStep = function(param){
            service.steps[param] = true;
        }   
        
        service.lockStep = function(param){
            service.steps[param] = false;
        }  
   
        service.lockNexts = function(param){
            for(var item in service.steps ){
                if(item>param){
                    console.log("lock step"+ item);
                    service.lockStep(item);
                }
            }
        };
        
         service.lockPrevious = function(param){
            for(var item in service.steps ){
                if(item<param){
                    console.log("lock step"+ item);
                    service.lockStep(item);
                }
            }
        };
        

        /*** Step1 **/
        service.user ={};
        
        service.user.firstName;
        service.user.lastName;
        service.user.email;
        service.user.gender;
        service.user.termsAndConditions;
        service.user.petName;

        /***Step2**/
        service.community = {};
        service.community.serviceKey;

        /**  - Step3 - Step4**/
        service.community.name;
        service.community.abstract;
        service.community.domain;
        service.community.country;
        service.community.language_first;
        service.community.priceKey;


        /**Sends payment request**/
        service.sendRequest = function(){

            var json = JSON.stringify(service.createWidzardFinalObject());
            console.log("sending... %s ", json);

           return $http.post(CurrentHost.getPortal() + "/yourAPIPath", json);

            /** or use this for simple form POST submitting **/
            // return $http({
            //     method: 'POST',
            //     url: CurrentHost.getPortal() + "/yourAPIPath",
            //     data: $.param({json: json}),
            //     headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            // });
            
        };

    service.createWidzardFinalObject = function(){

        var jsonPost = {
            user:  service.user,
            community: service.community
        };

        return jsonPost;

    }

    return service;
    }]);
