app.controller("TodoCtrl", function($scope) {
	$scope.welcome = "hello";
	$scope.showListView = true;
	$scope.newTask = {};
	$scope.items = [
	 {
	   id: 0,
	   task: "mow the lawn",
	   isCompleted: true,
	   dueDate: "12/5/16",
	   assignedTo: "Tom",
	   location: "my house",
	   urgency: "low",
	   dependencies: "sunshine, clippers, hat"
	 },
	 {
	   id: 1,
	   task: "write some code lee",
	   isCompleted: true,
	   dueDate: "11/5/16",
	   assignedTo: "Dick",
	   location: "school",
	   urgency: "high",
	   dependencies: "sunshine, clippers, hat"
	 },
	 {
	   id: 2,
	   task: "mow the lawn",
	   isCompleted: true,
	   dueDate: "12/5/16",
	   assignedTo: "Harry",
	   location: "my house",
	   urgency: "low",
	   dependencies: "sunshine, clippers, hat"
	 }
	];

	$scope.newItem = function() {
		console.log("clicked new item");
		$scope.showListView = false;
	};

	$scope.allItem = function() {
		console.log("clicked all items");
		$scope.showListView = true;

	};

	$scope.addNewItem = function() {
		$scope.newTask.isCompleted = false;
		$scope.newTask.id = $scope.items.length;
		console.log("added new item", $scope.newTask);
		$scope.items.push($scope.newTask);
		$scope.newTask = "";
	};
});