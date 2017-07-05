var ecomm = angular.module('ecommWebApp', ['ui.router']);

// config block
ecomm.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $stateProvider
  .state('/', {
	  url: '/',
	  templateUrl: 'partials/default.html'
  })
  .state('dashboard', {
	  url: '/dashboard',
	  templateUrl: 'partials/dashboard.html'
  });
  $urlRouterProvider.otherwise('/');
}]);

//run block
ecomm.run(function ($rootScope) {
});
