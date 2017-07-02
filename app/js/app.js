var ecomm = angular.module('ecommWebApp', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: 'partials/login.html',
    controller: 'loginCtrl'
  });
  $urlRouterProvider.otherwise('login');
}])
;
