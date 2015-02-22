'use strict';

angular.module('angular03')
  .controller('WarningCtrl', function($scope, $state, warningService) {
    $scope.cancel = function() {
      warningService.closeDialog();
    };

    $scope.confirm = function() {
      warningService.clearMessage();
      $state.go(warningService.getState());
      warningService.closeDialog();
    }
  });
