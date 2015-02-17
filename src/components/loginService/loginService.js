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

  return {
    getUser: getUser,
    login: login,
    logout: logout
  }



});
