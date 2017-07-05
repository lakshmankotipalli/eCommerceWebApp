ecomm.controller('loginCtrl', ['$scope', '$state', function ($scope, $state) {
	$scope.field = {};
	var uname="admin";
	var pwd = "password";
	$scope.login = function (obj) {
	  console.log(obj);
	  if($scope.field.username == uname && $scope.field.password == pwd) {
		  $state.go('dashboard');
	  }  
	};
  
}]);