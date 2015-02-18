'use strict';

angular.module('angular03')
  .controller('NavbarCtrl', function ($scope, $state, loginService, menu) {
    $scope.menuBuilder = [];

    console.log(menu.setMenu());

    $scope.isLogged = function() {
      return loginService.isLoggedAsAdmin();
    };

    $scope.logout = function() {
      loginService.logout();
      $state.go('login');
    };



  });
