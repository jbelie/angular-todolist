'use strict';

app.controller("toDoController",function($scope,$routeParams,taskProvider){


	if(angular.isUndefined($routeParams.status))
		$scope.status = "";
	else
		$scope.status = ($routeParams.status=="complete")?true:false;
	
	console.log($scope.status);
	
	$scope.tasks = taskProvider.getTasks();

	$scope.addTask = function(task){
		var taskToAdd = {
			id 		: 	$scope.tasks.length + 1,
			content	:	task.content,
			isDone	: 	false
		};
		
		if($scope.task.content.length >=1){
			taskProvider.addTask(taskToAdd);
			$scope.task.content = "";
		}
	}

});

