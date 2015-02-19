'use strict';

angular.module('page2', ['ui.router', 'menu'])
  .config(function ($stateProvider, $menuProvider) {
    $stateProvider
      .state('page2', {
        url: '/page2',
        templateUrl: 'app/page2/page2.html',
        controller: 'Page2Ctrl'
      });

	$menuProvider.addMenu('test4', 'test4', 'admin');
  })
;
