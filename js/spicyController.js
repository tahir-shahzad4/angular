$mainApp = angular.module("mainApp",[]);
$mainApp.controller("spicyController",function($scope){
	$scope.spice = "very";
	$scope.customSpice = "wasabi";

	$scope.spicy = function(spice){
		$scope.spice = spice;
	}
});