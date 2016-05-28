app.controller("ItemNewCtrl", function($scope, $location, itemStorage) {
	$scope.title = "New Item";
	$scope.submitButtonText = "Add New Item";
	$scope.newTask = {
		assignedTo: "",
		dependencies: "",
		dueDate: "",
		isCompleted: false,
		location: "",
		task: "",
		urgency: "",
		uid: ""
	};

	$scope.addNewItem = function() {
		itemStorage.postNewItem($scope.newTask)
		.then(function someName (response) {
			console.log(response);
			$location.url("/items/list");
		});
		
		
		
	};
});