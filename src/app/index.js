'use strict';

angular.module('angular03', ['ui.router', 'angular03.login', 'angular03.page1', 'angular03.page2', 'angular03.admin'])
  .config(function ($stateProvider, $urlRouterProvider, menuProvider) {
    console.log(menuProvider);

    $urlRouterProvider.otherwise('/login');
  })
  .run(['$rootScope', '$state', 'loginService', function($rootScope, $state, loginService) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      var username = loginService.getUser();
      var state;

      if (!username) {
        state = 'login';
      } else {
        return;
      }

      event.preventDefault();

      $state.go(state, {}, {notify: false})
        .then(function() {
          console.log(toState);
          $rootScope.$broadcast('$stateChangeSuccess', toState, toParams, fromState, fromParams);
        });
    });

  }])
;
