"use strict";

app.controller("loginCtrl", function($scope, firebaseURL) {
	let ref = new Firebase(firebaseURL);

	$scope.account = {
		email: "",
		password: ""
	};

	$scope.register = () => {
		console.log("register clicked");
		ref.createUser ({
			email: $scope.account.email,
			password: $scope.account.password
		}, (error, userData) => {
			if(error){
				console.log(`Error creating user: ${error}`);
			} else {
				console.log(`Created user account with uid ${userData.uid}`);
				$scope.login();
			}
		})
	};

	$scope.login = () => {
		console.log("login clicked");
	};

})