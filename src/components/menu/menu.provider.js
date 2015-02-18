'use strict';

angular.module('angular03').provider('menu', function() {
  var menu = [];

  this.addMenu = function (name, state, permission) {
    menu.push({name: name, state: state, permission: permission});

    return this;
  };


  this.$get = function() {
    return {
      setMenu: function() {
        return menu;
      }
    }
  }
});
