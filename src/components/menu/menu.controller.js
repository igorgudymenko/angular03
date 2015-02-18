'use strict';

angular.module('menu')
  .controller('MenuCtrl', function ($scope, $state, loginService, $menu) {
    $scope.menuBuilder = $menu.setMenu();

    console.log($menu.setMenu());

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
