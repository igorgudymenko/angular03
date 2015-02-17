'use strict';

angular.module('angular03.login')
  .controller('LoginCtrl', function ($scope, $state, loginService) {
    console.log('hi');
    $scope.login = function() {
      loginService.login($scope.user.username);
      $state.go('dashboard');
    };
  });
