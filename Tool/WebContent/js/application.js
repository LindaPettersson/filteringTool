var application = angular.module('FilterTool', ['ngRoute']);

/** ***** Routes ******* */

application.config([ '$routeProvider', function($routeProvider) {

	$routeProvider.when('/home', {
		templateUrl : './views/home.html'
	}).when('/loggain', {
		templateUrl : './views/loggain.html',
		controller : 'loginCtrl'
	}).otherwise({
		redirectTo : 'home'
	});

} ]);