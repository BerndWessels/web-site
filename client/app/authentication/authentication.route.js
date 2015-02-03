/**
 * This is the authentication routes configuration.
 * Only configure routes in this file.
 * @memberOf Authentication Module
 * @namespace Authentication Routes
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
   * @memberOf Authentication Module.Authentication Routes
   */
  function config($stateProvider) {

    // Create the authentication state and assign the template and controller.
    $stateProvider
      .state('authentication', {
        // This is an abstract state. You can only access its child states.
        abstract: true,
        url: '/authentication',
        // Abstract states still need a ui-view for its children to populate.
        template: '<ui-view></ui-view>'
      });
  }

})();
