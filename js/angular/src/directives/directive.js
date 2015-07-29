'use strict';

app.directive('taskDecorate',function(){
	return{
		restrict: "E",
		templateUrl : 'views/todo/decorator/taskHTML.html' 
	}
});
