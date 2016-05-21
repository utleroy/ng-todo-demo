var app = angular.module("TodoApp", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider.
		when("/items/list",{
			templateUrl: "partials/item-list.html",
			controller: "ItemListCtrl"
		}).
		when("/items/new", {
			templateUrl: "partials/item-new.html",
			controller: "ItemNewCtrl"
		}).
		when("/items/details", {
			templateUrl: "partials/item-details.html",
			controller: "ItemViewCtrl"
		}).
		otherwise("items/list");

})





/* use dollar scope notation */