app.controller("ItemNewCtrl", function($scope, $http, $location) {
	$scope.newTask = {
		assignedTo: "",
		dependencies: "",
		dueDate: "",
		isCompleted: "false",
		location: "",
		task: "",
		urgency: ""
	};

	$scope.addNewItem = function() {
		$http.post(
			"https://leroy-todo.firebaseio.com/items.json",
			JSON.stringify({
				assignedTo: $scope.newTask.assignedTo,
				dependencies: $scope.newTask.dependencies,
				dueDate: $scope.newTask.dueDate,
				isCompleted: $scope.newTask.isCompleted,
				location: $scope.newTask.location,
				task: $scope.newTask.task,
				urgency: $scope.newTask.urgency
			  })
		    )
			.success(function(response) {
				console.log(response);
				$location.url("/items/list");
			});
		
		
		
	};
});