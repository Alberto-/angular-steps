/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * 
 * Author:  Alberto Piras
 */



'use strict';


/**Utils General module**/

var CurrentHost = (function () {

    var currentFullPath = window.location.href;
    var pathName = window.location.pathname;
    var pathNameArray = pathName.split("/");
    var portalName = pathNameArray[1];
    var portalHost = window.location.protocol + "//" + window.location.host;
    var currentPortal = portalHost + "/" + portalName;

    function getPortal() {
        return currentPortal;
    }

    // public methods
    return{
        getPortal: getPortal
    };

})();


/**
 *
 * AngularJs App
 *
 * */


var registrationApp = angular.module('stepsApp', ['ngAnimate']);

registrationApp.config(function ($httpProvider) {
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});


registrationApp.directive('step1', function() {
  return {
    templateUrl:  CurrentHost.getPortal() + '/views/step1.html',
    controller:"step1Controller"
  };
});

registrationApp.directive('step2', function() {
  return {
    templateUrl:  CurrentHost.getPortal() + '/views/step2.html',
     controller:"step2Controller"
  };
});

registrationApp.directive("step3", function(){
   return{
    templateUrl:  CurrentHost.getPortal() + '/views/step3.html',
        controller:"step3Controller"
   };
});

registrationApp.directive("step4", function(){
   return{
    templateUrl:  CurrentHost.getPortal() + '/views/step4.html',
        controller:"step4Controller"
   };
});

registrationApp.directive("step5", function(){
   return{
    templateUrl:  CurrentHost.getPortal() + '/views/step5.html',
    controller:"step5Controller"
   };
});


registrationApp.filter('buildYearArrayFilter',function(){
  return function(initialArray, startYear, endYear) {

      for (var i=startYear; i<=endYear; i++ ){
          initialArray.push(i);
      }
      return initialArray;
  }
  
});
