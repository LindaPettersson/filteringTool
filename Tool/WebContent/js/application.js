var application = angular.module('FilterTool', ['ngRoute', 'ngTable']);


/** ***** Routes ******* */

application.config([ '$routeProvider', function($routeProvider) {

	$routeProvider.when('/home', {
		templateUrl : './views/home.html',
		controller  : 'startpageCtrl'
	}).when('/login', {
		templateUrl : './views/login.html',
		controller : 'loginCtrl'
	}).when('/choosefiles', {
		templateUrl : './views/choosefiles.html',
		controller : 'choosefilesCtrl'
	}).when('/summarytypes', {
		templateUrl : './views/summarytypes.html',
		controller : 'summarytypesCtrl'
	}).otherwise({
		redirectTo : 'home'
	});

} ]);


/******* Controllers ******* */
//Start page
application.controller('startpageCtrl', function($scope, $location) {
	//Go to login
	$scope.GoToLogin = function(){
		$location.path('/login');
	}
});

//Login
application.controller('loginCtrl', function($scope, $location) {
	//Cancel login
	$scope.cancelLogin = function(){
		$location.path('./home');
	}
	
	//Login
	$scope.login = function() {
		//TODO validate input
		//var username = $scope.username;
		//var password = $scope.password;
		//console.log(username + " " + password);
		
		//TODO if ok
		$location.path('/choosefiles');
	};
		
	// TODO If user is logged in - enable openSettings
//	$scope.openSettingsDropdown = function($event) {
//
//	};
});

//Choose files
//application.controller('choosefilesCtrl', ['FileSaver', 'Blob', function () {
//    
//	//Save file from server
//	$scope.download = function () {
//        var myData = new Blob([text], { type: 'text/plain;charset=utf-8' });
//        FileSaver.saveAs(myData, 'text.txt');
//    }
//}]);




application.controller('choosefilesCtrl', function($scope, $location){
//	$scope.files = []; 
//	
//	//Proceed to display files in 'Summary types'
//	$scope.uploadFile = function(){
//		var uploadUrl = "/choosfiles";
//	    fileUpload.uploadFileToUrl(file, uploadUrl);
//		
//	    $location.path('/summarytypes');
//		
//    
//	};
});

//Summary types
application.controller('summarytypesCtrl', function($scope, $location, NgTableParams) {
	//Display dummy data in table
	var data = [
		{date: "2018-05-08 15:14:25", name: "FileNotFound", amount: 3},
		{date: "2018-05-08 10:11:02", name: "IdSekretess", amount: 7},
		{date: "2018-05-07 17:00:25", name: "IdDataFinnsEj", amount: 1},
		{date: "2018-05-06 09:14:30", name: "IllegalArgument", amount: 9},
		];
	$scope.tableParams = new NgTableParams({}, { dataset: data});
	
});



/*** Directives ***/
//Choose one or more files and display file name(s)
application.directive('ngFileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var model = $parse(attrs.ngFileModel);
            var isMultiple = attrs.multiple;
            var modelSetter = model.assign;
            element.bind('change', function () {
                var values = [];
                angular.forEach(element[0].files, function (item) {
                    var value = {
                       // File Name 
                        name: item.name,
                        //File Size 
                        size: item.size,
                        //File URL to view 
                        url: URL.createObjectURL(item),
                        // File Input Value 
                        _file: item
                    };
                    values.push(value);
                });
                scope.$apply(function () {
                    if (isMultiple) {
                        modelSetter(scope, values);
                    } else {
                        modelSetter(scope, values[0]);
                    }
                });
            });
        }
    };
}]);

/**** Services *****/
////Upload file
//application.service('multipartForm', ['$http', function($http){
//	this.post = function(uploadUrl, data){
//		var fd = new FormData();
//		for(var key in data)
//			fd.append(key, data[key]);
//		$http.post(uploadUrl, fd, {
//			transformRequest: angular.indentity, //so it won´t serialize
//			headers: {'Content-Type': undefined }
//		})
//	}
//}]);


//application.controller('choosefilesCtrl', ['$scope', 'multipartFrom',  function($scope, multipartForm){
//	
//	$scope.stacktrace = {};
//	$scope.ChooseFile = function(){
//		var uploadUrl = '/valjfil';
//		multipartFrom.post(uploadUrl, $scope.stacktrace)
//	}
//}]);

