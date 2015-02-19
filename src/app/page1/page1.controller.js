'use strict';

angular.module('page1')
  .controller('Page1Ctrl', function ($scope, $rootScope, $state) {
    $rootScope.warningState = false;

    $scope.change = function() {
      $rootScope.warningState = true;
      console.log('changed');
    };

  });
