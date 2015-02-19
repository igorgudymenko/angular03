'use strict';

angular.module('page1', ['ui.router', 'menu'])
  .config(function ($stateProvider, $menuProvider) {
    $stateProvider
      .state('page1', {
        url: '/page1',
        templateUrl: 'app/page1/page1.html',
        controller: 'Page1Ctrl'
      });

    $menuProvider.addMenu('test3','test3', 'all');
  })
  .run(['$rootScope', '$state', function($rootScope, $sate){
    $rootScope.$on('$stateChangeStart', function(event) {
      var warning = $rootScope.warningState;
      if (warning) {
        console.log('unsaved data');
        event.preventDefault();
      }
    })
  }])
;
