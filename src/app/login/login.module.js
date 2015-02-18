angular.module('login', ['ui.router', 'menu'])
  .config(function($stateProvider, $menuProvider) {
    $stateProvider
      .state('login', {
      url: '/login',
      templateUrl: 'app/login/login.html',
      controller: 'LoginCtrl'
    });

	$menuProvider.addMenu('test1', 'test1', 'admin');
  })
;
