'use strict';

app.controller("toDoController",function($scope,$routeParams,taskProvider){

	/*
	 * Display all tasks | toDo | complete tasks
	 */
	if(angular.isUndefined($routeParams.status))
		$scope.status = "";
	else
		$scope.status = ($routeParams.status=="complete")?true:false;
	
	
	/*
	 * Get All tasks
	 * No database for demo
	 */
	$scope.tasks = taskProvider.getTasks();


	/*
	 * Add a task
	 */
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
	
	/*
	 * Change status task
	 */
	 $scope.updateStatusTask = function(task){
		task.isDone = !task.isDone;
	 }
	 
	/*
	 * Remove task
	 */
	 $scope.deleteTask = function(index){
		taskProvider.removeTask(index);
	 }
	 

});

