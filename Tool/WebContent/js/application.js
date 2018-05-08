var application = angular.module('FilterTool', ['ngRoute']);

/** ***** Routes ******* */

application.config([ '$routeProvider', function($routeProvider) {

	$routeProvider.when('/home', {
		templateUrl : './views/home.html',
		controller  : 'loginCtrl'
	}).when('/login', {
		templateUrl : './views/login.html',
		controller : 'loginCtrl'
	}).when('/choosefiles', {
		templateUrl : './views/choosefiles.html',
		controller : 'choosefilesCtrl'
	}).otherwise({
		redirectTo : 'home'
	});

} ]);


/** ***** Controllers ******* */
//Start page
application.controller('startpageCtrl', function($scope, $location) {
	$scope.GoToLogin = function(){
		$location.path('/login');
	}
});

//Login
application.controller('loginCtrl', function($scope, $http) {
	
	
	$scope.login = function() {
		var username = $scope.username;
		var password = $scope.password;
		//console.log(username + " " + password);
//		nodeMysql.createDB();
//		console.log('DB created!');
//		 $http.get('/createdb').then(function(data) {
//		        console.log(data);
//		    });
	};
		
	// TODO If user is logged in - enable openSettings
	$scope.openSettingsDropdown = function($event) {

	};
});

//Choose files
//application.controller('chooseFilesCtrl', ['$scope', 'multipartFrom',  function($scope, multipartForm){
//	$scope.stacktrace = {};
//	$scope.ChooseFile = function(){
//		var uploadUrl = '/valjfil';
//		multipartFrom.post(uploadUrl, $scope.stacktrace)
//	}
//}]);