'use strict';

angular.module('angular03', ['ui.router', 'menu'])
  .config(function ($stateProvider, $urlRouterProvider, menuProvider) {
    $stateProvider
      .state('page1', {
        url: '/page1',
        templateUrl: 'app/page1/page1.html',
        controller: 'Page1Ctrl'
      })
      .state('page2', {
        url: '/page2',
        templateUrl: 'app/page2/page2.html',
        controller: 'Page2Ctrl'
      })
      .state('admin', {
        url: '/admin',
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminCtrl'
      })
    ;

    console.log(menuProvider);

    //menuProvider.addMenuComponent('test','test1');

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
