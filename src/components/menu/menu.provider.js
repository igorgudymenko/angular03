'use strict';

angular.module('menu').provider("$menu", function() {
  var menuItem = [];

  this.addMenu = function (name, state, permission) {
	menuItem.push({name: name, state: state, permission: permission});
    return this;
  };


  this.$get = function() {
    return {
      setMenu: function() {
        return menuItem;
      }
    }
  }
});
