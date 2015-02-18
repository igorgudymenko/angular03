'use strict';

angular.module('angular03.page1', ['ui.router'])
  .config(function ($stateProvider/*, menuProvider*/) {
    $stateProvider
      .state('page1', {
        url: '/page1',
        templateUrl: 'app/page1/page1.html',
        controller: 'Page1Ctrl'
      });

    //menuProvider.addMenu('test','test1', 'admin');
  })
;
