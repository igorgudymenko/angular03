'use strict';

angular.module('angular03', ['ui.router', 'menu'])
  .controller('NavbarCtrl', function ($scope, $state, loginService, $menuProvider) {
    $scope.menuBuilder = $menuProvider.setMenu();

    console.log($menuProvider.setMenu());

    $scope.isLogged = function() {
      return loginService.isLoggedAsAdmin();
    };

    $scope.checkPermission = function(permission) {
      return loginService.setPermission(permission);
    };

    $scope.logout = function() {
      loginService.logout();
      $state.go('login');
    };



  });
