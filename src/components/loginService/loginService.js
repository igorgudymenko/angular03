'use strict';

angular.module('angular03').factory('loginService', function() {
  function getUser() {
    return localStorage.getItem('username');
  }

  function login(username) {
    localStorage.setItem('username', username);
  }

  function logout() {
    localStorage.removeItem('username');
  }

  function isLoggedAsAdmin() {
    var username = window.localStorage.getItem('username');
    if (username === 'admin') {
      return true;
    }
  }

  function setPermission(permission) {
    var username = window.localStorage.getItem('username');
    if (permission === 'admin' && username === 'admin') {
      return true;
    }
  }

  return {
    getUser: getUser,
    login: login,
    logout: logout,
    isLoggedAsAdmin: isLoggedAsAdmin,
    setPermission: setPermission
  }



});
