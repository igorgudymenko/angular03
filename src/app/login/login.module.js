angular.module('angular03.login')
  .config(function($stateProvider, $urlRouterProvider, menuProvider) {
    $stateProvider
      .state('login', {
      url: '/login',
      templateUrl: 'app/login/login.html',
      controller: 'LoginCtrl'
    });

  console.log(menuProvider);
  //menuProvider.addMenuComponent('test1', 'test1');



  })
  //.run(function() {
  //
  //})
;
