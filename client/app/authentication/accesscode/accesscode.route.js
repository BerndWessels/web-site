/**
 * This is the authentication access code routes configuration.
 * Only configure routes in this file.
 * @memberOf Authentication Module
 * @namespace Authentication AccessCode Routes
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
   * @memberOf Authentication Module.Authentication AccessCode Routes
   */
  function config($stateProvider) {

    // Create the virtual card management state and assign the template and controller.
    $stateProvider
      .state('authentication.accesscode', {
        url: '/accesscode/:accesscode',
        controller: 'app.authentication.accessCodeController',
        controllerAs: 'accessCodeController',
        data: {
          noAuthentication: true
        }
      });
  }

})();
