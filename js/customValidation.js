angular.module('customvalidationapp', [])
  .directive("validateDate", function() {
	  return{
          restrict:'A',
          link:function(scope,el,attr,compile){
            el.on('keyup',function(){
            			validateDt(scope,el,attr,compile);
            });
            el.on('change',function(){
    				validateDt(scope,el,attr,compile);
            });
          }
           
        };
  })
  .controller("mainCtrl", function($scope) {
	  
	  $scope.strdate1="12/31/2016";
	  $scope.strdate2="01/01/2017";
	  $scope.strdate3="01/31/2017";
	  $scope.strdate4="02/28/2017";
	  
	  $scope.date1 = moment($scope.strdate1, "MM/DD/YYYY").toDate();
	  $scope.date2 = moment($scope.strdate2, "MM/DD/YYYY").toDate();
	  $scope.date3 = moment($scope.strdate3, "MM/DD/YYYY").toDate();
	  $scope.date4 = moment($scope.strdate4, "MM/DD/YYYY").toDate();
	  
	  
	  $scope.convertToDateFromStr = function convertToDateFromStr(){
		
		  //working
		  // $scope.testDateObj = new Date($scope.testDateStr);
		  $scope.testDateObj = moment($scope.testDateStr, "YYYY-MM-DD").toDate();
		  
		  //not working
		 // $scope.testDateObj = (moment($scope.testDateStr).format("YYYY-MM-DD")).toDate();
		  
	  } 

})


function validateDt(scope,element,attr){
	//change : on change event
	
    // alert(el.val());
    // alert(moment(el.val(),           "YYYY-MM").isValid() );
   	strDate = element.val();
    
   	if(strDate!=""){
   		 //scope.isDateValid = (moment(strDate,"").isValid(),true);
       	scope.isDateValid =	moment(strDate, 'YYYY-MM-DD', true).isValid();  //strict validation
       	//http://momentjs.com/guides/#/warnings/js-date/
       	
			//scope.isDateValid =	moment(strDate, 'YYYY-MM-DD').isValid();  //lenient validation
			momentDt = moment(strDate);
   		
   		//scope.isDateValid =	moment(strDate, 'YYYY-MM-DD').toDate(); 
   	}
   	else{
   		scope.isDateValid=true;
   	}
  
     
	if(scope.isDateValid){
		//el.removeAttr('style');
		element.removeClass('invalidInputFormat');
		//$compile(el)(scope);
	}
	else{
		element.addClass('invalidInputFormat');
			//el.css("border", "1px solid red")
		//compile(el)(scope);
	}
	
   scope.$apply();
     
}