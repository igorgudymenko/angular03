'use strict';

angular.module('angular03', ['ui.router', 'ui.bootstrap', 'menu', 'loginService', 'warningService', 'page1', 'page2', 'admin', 'login'])
  .config(function ($stateProvider, $urlRouterProvider, $menuProvider) {
    $urlRouterProvider.otherwise('/login');
  })
  .run(['$rootScope', '$state', '$modal', 'loginService', 'warningService', function($rootScope, $state, $modal, loginService, warningService) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {

      if (fromParams.changed) {
        warningService.showDialog();
        warningService.setState(toState.name);
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
