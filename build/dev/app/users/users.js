;(function(){
	'use strict';
	angular.module('Loft.Users',[
		//'ngRoute'
		'ui.router'
		])
		.config(UsersConfig)
		.controller('UsersCtrl',usersController);
	
 usersController.$inject = ['$scope'];
	function usersController($scope){
		$scope.name = "users";
		$scope.usersList = [
			{
				email: 'example@test.com',
				name: 'Example Test'
			}
		];
		
	}
/*
	function UsersConfig($routeProvider){
		$routeProvider
		.when('/users',{
			templateUrl : 'app/users/users.html',
			controller : 'UsersCtrl',
			controllerAs : 'usc'
		});
	}

*/
function UsersConfig($stateProvider){
		$stateProvider
		.state('users',{
			url: '/users',
			templateUrl : 'app/users/users.html',
			controller : 'UsersCtrl',
			controllerAs : 'usc'
		});
	}
})();
