'use strict';

app.controller("toDoController",function($scope,taskProvider){
	
	$scope.isDone = false;
	$scope.tasks = taskProvider.getTasks();

	$scope.addTask = function(task){
		var taskToAdd = {
			id 		: 	$scope.tasks.length + 1,
			content	:	task.content,
			isDone	: 	false
		};
		
		taskProvider.addTask(taskToAdd);
		$scope.task.content = "";

	}
});

