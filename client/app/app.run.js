/**
 * This is the application's run setup.
 * @memberOf Application Module
 * @namespace Application Run
 */
(function () {
  'use strict';

  // Register the application's run setup.
  angular.module('app').run(run);

  // Inject the dependencies.
  run.$inject = ['$rootScope', '$state', 'app.authentication.service', 'app.core.service'];

  // Prevent multiple simultaneous checks.
  var isChecking = false;

  /**
   * @name config
   * @desc Setup the application.
   * @param $rootScope
   * @param $state
   * @param authenticationService
   * @memberOf Application Module.Application Run
   */
  function run($rootScope, $state, authenticationService) {
    // Intercept state changes.
    $rootScope.$on('$stateChangeStart', function (event, toState/*, toParams, fromState, fromParams*/) {
      // Allow public routes.
      if (toState.data && toState.data.noAuthentication) {
        return;
      }
      // Prevent multiple simultaneous checks.
      if (isChecking) {
        return;
      }
      isChecking = true;
      // Check if we have a valid access token.
      authenticationService.getAccessToken().then(
        // Success.
        function (/*accessToken*/) {
          // Finished checking.
          isChecking = false;
        },
        // Failure.
        function () {
          // Finished checking.
          isChecking = false;
          // Tell the user that he is not logged in.
          $state.go('authentication.notLoggedIn');
        });
    });
  }

})();
