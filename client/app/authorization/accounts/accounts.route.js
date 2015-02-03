/**
 * This is the authorization accounts routes configuration.
 * Only configure routes in this file.
 * @memberOf Authorization Module
 * @namespace Authorization Accounts Routes
 */
(function () {
  'use strict';

  // Register the routes configuration.
  angular.module('app.authorization').config(config);

  // Inject the dependencies.
  config.$inject = ['$stateProvider'];

  /**
   * @name config
   * @desc Configures the routes.
   * @param $stateProvider
   * @memberOf Authorization Module.Authorization Accounts Routes
   */
  function config($stateProvider) {

    // Create the virtual card management state and assign the template and controller.
    $stateProvider
      .state('authorization.accounts', {
        url: '/accounts',
        templateUrl: 'app/authorization/accounts/accounts.html',
        controller: 'app.authorization.accountsController',
        controllerAs: 'accountsController'
      });
  }

})();
