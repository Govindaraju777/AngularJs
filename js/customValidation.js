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