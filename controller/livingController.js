angular.module('mainApp',[]).controller('livingController', function($scope){
	$scope.livings = [
	{name: 'Jani', country: 'Norway'},
	{name: 'Hege', country: 'Sweden'},
	{name: 'Kai', country: 'Denmark'},
	{name: 'Kai2', country: 'Denmark2'}
	];
});