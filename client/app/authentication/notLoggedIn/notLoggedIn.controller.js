/**
 * This is the authentication notLoggedIn controller.
 * @memberOf Authentication Module
 * @namespace Authentication NotLoggedIn Controller
 */
(function () {
  'use strict';

  // Register the controller.
  angular.module('app.authentication').controller('app.authentication.notLoggedInController', NotLoggedInController);

  // Inject the dependencies.
  NotLoggedInController.$inject = ['$window', 'app.core.service'];

  /**
   * @name notLoggedInController
   * @desc Create the controller.
   * @param $window
   * @param coreService
   * @memberOf Authentication Module.Authentication NotLoggedIn Controller
   */
  function NotLoggedInController($window, coreService) {

    // Assign this controller as the view-model.
    // It will be accessible as 'notLoggedInController' within the HTML template.
    var vm = this;

    // Register the view model's properties.

    // Redirect to the authorization login page.
    vm.redirectToLogin = function () {
      // Redirect.
      $window.location = coreService.getLoginUrl();
    };
  }

})();
