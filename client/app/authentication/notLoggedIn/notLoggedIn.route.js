/**
 * This is the authentication notLoggedIn routes configuration.
 * Only configure routes in this file.
 * @memberOf Authentication Module
 * @namespace Authentication NotLoggedIn Routes
 */
(function () {
  'use strict';

  // Register the routes configuration.
  angular.module('app.authentication').config(config);

  // Inject the dependencies.
  config.$inject = ['$stateProvider'];

  /**
   * @name config
   * @desc Configures the routes.
   * @param $stateProvider
   * @memberOf Authentication Module.Authentication NotLoggedIn Routes
   */
  function config($stateProvider) {

    // Create the virtual card management state and assign the template and controller.
    $stateProvider
      .state('authentication.notLoggedIn', {
        url: '/notloggedin',
        templateUrl: 'app/authentication/notLoggedIn/notLoggedIn.html',
        controller: 'app.authentication.notLoggedInController',
        controllerAs: 'notLoggedInController',
        data: {
          noAuthentication: true
        }
      });
  }

})();
