var app = angular.module("TodoApp", []);

app.controller("NavCtrl", function($scope) {
	$scope.navItems = [{name: "Logout"},{name: "All Items"}, {name: "New Item"}];
});

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
	   assignedTo: "Lee",
	   location: "my house",
	   urgency: "low",
	   dependencies: ["sunshine", "clippers", "hat"]
	 },
	 {
	   id: 1,
	   task: "write some code",
	   isCompleted: true,
	   dueDate: "11/5/16",
	   assignedTo: "Lee",
	   location: "school",
	   urgency: "high",
	   dependencies: ["computer", "books", "help"]
	 },
	 {
	   id: 2,
	   task: "mow the lawn",
	   isCompleted: true,
	   dueDate: "12/5/16",
	   assignedTo: "Lee",
	   location: "my house",
	   urgency: "low",
	   dependencies: ["sunshine", "clippers", "hat"]
	 }
	]

	$scope.newItem = function() {
		console.log("clicked new item");
		$scope.showListView = false;
	};

	$scope.allItem = function() {
		console.log("clicked all items");
		$scope.showListView = true;

	};
});




/* use dollar scope notation */