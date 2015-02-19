'use strict';

angular.module('login')
  .controller('LoginCtrl', function ($scope, $state, loginService) {
    $scope.login = function() {
      loginService.login($scope.user.username);
      $state.go('page1');
    };
  });
