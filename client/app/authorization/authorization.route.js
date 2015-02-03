/**
 * This is the authorization routes configuration.
 * Only configure routes in this file.
 * @memberOf Authorization Module
 * @namespace Authorization Routes
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
   * @memberOf Authorization Module.Authorization Routes
   */
  function config($stateProvider) {

    // Create the authorization state and assign the template and controller.
    $stateProvider
      .state('authorization', {
        // This is an abstract state. You can only access its child states.
        abstract: true,
        url: '/authorization',
        // Abstract states still need a ui-view for its children to populate.
        template: '<ui-view></ui-view>'
      });
  }

})();
