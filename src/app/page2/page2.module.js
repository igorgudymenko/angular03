'use strict';

angular.module('angular03.page2', ['ui.router'])
  .config(function ($stateProvider) {
    $stateProvider
      .state('page2', {
        url: '/page2',
        templateUrl: 'app/page2/page2.html',
        controller: 'Page2Ctrl'
      })
  })
;
