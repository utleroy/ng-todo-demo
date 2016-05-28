var app = angular.module("TodoApp", ["ngRoute"])
	.constant("firebaseURL","https://leroy-todo.firebaseio.com/");

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
		when("/items/:itemId", {                        //colon tells angular to pull out itemId
			templateUrl: "partials/item-details.html",
			controller: "ItemViewCtrl"
		}).
		when("/items/:itemId/edit", {                        //colon tells angular to pull out itemId
			templateUrl: "partials/item-new.html",
			controller: "ItemEditCtrl"
		}).
		when("/login", {
			templateUrl: "partials/login.html",
			controller: "loginCtrl"
		}).
		otherwise("items/list");

});





/* use dollar scope notation */