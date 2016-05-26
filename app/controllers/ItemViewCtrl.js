app.controller("ItemViewCtrl", function($scope, $http, $routeParams, itemStorage) {
	// $scope.welcome = "hello"; angular console log example
	$scope.items = [];
	$scope.selectedItem = {};


	$http.get(firebaseURL + "/items.json")
		.success(function(itemObject) {
			var itemCollection = itemObject;
			Object.keys(itemCollection).forEach(function(key) {
				  itemCollection[key].id = key;
				  $scope.items.push(itemCollection[key]);

				  // the filter method below loops through the firebase array and shows everything associated with itemId

				  $scope.selectedItem = $scope.items.filter(function(item) {
				  	return item.id === $routeParams.itemId;
				  })[0];

			  });
		});
});