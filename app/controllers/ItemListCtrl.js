app.controller("ItemListCtrl", function($scope) {
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

});