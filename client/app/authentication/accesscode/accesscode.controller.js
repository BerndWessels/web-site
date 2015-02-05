/**
 * This is the authentication access code controller.
 * @memberOf Authentication Module
 * @namespace Authentication AccessCode Controller
 */
(function () {
  'use strict';

  // Register the controller.
  angular.module('app.authentication').controller('app.authentication.accessCodeController', AccessCodeController);

  // Inject the dependencies.
  AccessCodeController.$inject = ['$state', '$stateParams', 'app.authentication.accessCodeDataService', 'app.authentication.service'];

  /**
   * @name accessCodeController
   * @desc Create the controller.
   * @param $state
   * @param $stateParams
   * @param accessCodeDataService
   * @param authenticationService
   * @memberOf Authentication Module.Authentication AccessCode Controller
   */
  function AccessCodeController($state, $stateParams, accessCodeDataService, authenticationService) {

    // Exchange the access code for an access token.
    accessCodeDataService.getAccessToken($stateParams.accesscode).then(
      // Success.
      function (accessToken) {
        // Store the new access token.
        authenticationService.setAccessToken(accessToken);
        // Redirect to the main state.
        $state.go('home');
      },
      // Failure.
      function (/* status */) {
        // Deal with it!
        // ...
        // Redirect to the login state.
        $state.go('login');
      }
    );
  }

})();
