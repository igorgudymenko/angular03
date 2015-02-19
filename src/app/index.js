'use strict';

angular.module('angular03', ['ui.router', 'menu', 'loginService', 'page1', 'page2', 'admin', 'login'])
  .config(function ($stateProvider, $urlRouterProvider, $menuProvider) {
    console.log($menuProvider);

    $urlRouterProvider.otherwise('/login');
  })
  .run(['$rootScope', '$state', 'loginService', function($rootScope, $state, loginService) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      var warningMsg = $rootScope.warningState;

      var confirm = '';

      if (warningMsg) {
        console.log('changes not saved');



        event.preventDefault();

      }

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
