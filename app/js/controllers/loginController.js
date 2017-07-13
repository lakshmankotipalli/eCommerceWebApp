ecomm.controller('loginCtrl', ['$scope', '$state', 'userService', function ($scope, $state, userService) {
	$scope.field = {};
	var uname="admin";
	var pwd = "password";
	$scope.login = function (obj) {
	  console.log(obj);
	  if($scope.field.username == uname && $scope.field.password == pwd) {
			console.log(userService.setLoginData(obj));
			console.log(userService.getLoginData());
			$state.go('dashboard');
	  }
	};

}]);
