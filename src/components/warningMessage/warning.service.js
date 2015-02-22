'use strict';

angular.module('warningService', []).factory('warningService', function($modal, $modalStack, $state) {
  function setState(name) {
    $state.params.toState = name;
  }

  function getState() {
    return $state.params.toState;
  }

  function clearMessage() {
    $state.params.changed = false;
  }

  function showDialog() {
    $modal.open({
      templateUrl: 'components/warningMessage/warning.html',
      controller: 'WarningCtrl'
    });
  }

  function closeDialog() {
    $modalStack.dismissAll();
  }

  function redirectToState(name) {
    $state.go(name);
  }

  return {
    setState: setState,
    getState: getState,
    clearMessage: clearMessage,
    showDialog: showDialog,
    closeDialog: closeDialog,
    redirectToState: redirectToState
  }
});
