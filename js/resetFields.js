//mymodule=angular.module('customvalidationapp', []);
    
//mymodule.controller('mainCtrl', resetfields($scope));
 

var mymodule = angular.module('customvalidationapp', []);
mymodule.controller('mainCtrl', function($scope) {
	//resetService.resetFunciton=resetService.resetView();
	
	 $scope.resetFunciton = function(){
		
		alert(1);
		
//		elements = angular.element(":input");
		elements= angular.element(document.querySelector('input[type="text"]'));
		 angular.forEach(elements, function (val, key) {
	            val.value = '';
	      });
		 
		 $scope.$apply();
	 }
    
});


mymodule.service('resetService', function() {
	 this.resetView = function(){
		//$scope.userName = "Govind";
			
			/*angular.forEach($scope.inputFileds, function (val, key) {
				alert(1);
			    val.value = ''; // Clear value of object inside inputFields
			    alert();
			});*/
			//$scope.$apply()
			
		
			
			
	 }
	
});
