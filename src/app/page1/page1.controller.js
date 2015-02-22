'use strict';

angular.module('page1')
  .controller('Page1Ctrl', function ($scope, $state) {
    $scope.changed = function() {
      $state.params.changed = true;
    };
  });
