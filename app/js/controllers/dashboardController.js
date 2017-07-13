ecomm.controller('dashboardCtrl', ['$scope', 'userService', function ($scope, userService) {

$scope.init = function () {
  $scope.field = {};
  console.log(userService.getLoginData());
  $scope.userData = userService.getLoginData();
}



$scope.init();

}]);
