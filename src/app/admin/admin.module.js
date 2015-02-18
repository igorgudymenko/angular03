'use strict';

angular.module('admin', ['ui.router', 'menu'])
  .config(function ($stateProvider, $menuProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminCtrl'
      });

	$menuProvider.addMenu('test2', 'test2', 'all');
  })
;
