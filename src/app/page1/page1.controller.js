'use strict';

angular.module('angular03')
  .controller('Page1Ctrl', function ($scope, $state, $stateParams) {
    $scope.isLogged = function() {
      var username = window.localStorage.getItem('username');
      if (username === 'admin') {
        return true;
      }
    };
    $scope.logout = function() {
      window.localStorage.removeItem('username');
      $state.go('login');
    }
  });
