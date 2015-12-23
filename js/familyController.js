$mainApp = angular.module("mainApp",[]);
$mainApp.controller("FamilyController", ['$scope', function($scope){
	$scope.rootName = "Nikki";
	$scope.timeOfDay = "Morning";
}]);
$mainApp.controller("ChildController", ['$scope', function($scope){
	$scope.rootName = "Mattie";
}]);
$mainApp.controller("GrandChildController", ['$scope', function($scope){
	$scope.rootName = "Gingerbread Baby";
}]);