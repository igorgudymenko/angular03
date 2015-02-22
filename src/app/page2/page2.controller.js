'use strict';

angular.module('page2')
  .controller('Page2Ctrl', function ($scope, $state) {
    $scope.changed = function() {
      $state.params.changed = true;
    };
  });
