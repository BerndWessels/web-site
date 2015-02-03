/**
 * This is the authentication module configuration.
 * Do NOT configure routes in this file.
 * @memberOf Authentication Module
 * @namespace Authentication Config
 */
(function () {
  'use strict';

  // Register the module's configuration.
  angular.module('app.authentication').config(config);

  // Inject the dependencies.
  config.$inject = ['$httpProvider', 'app.core.serviceProvider'];

  /**
   * @name config
   * @desc Configures the module.
   * @param $httpProvider
   * @param coreServiceProvider
   * @memberOf Authentication Module.Authentication Config
   */
  function config($httpProvider, coreServiceProvider) {
    // Get the app service.
    var coreService = coreServiceProvider.$get();
    // Enable cors.
    $httpProvider.defaults.useXDomain = true;
    // Add the interceptor.
    $httpProvider.interceptors.push([
      '$location',
      '$injector',
      '$q',
      function ($location, $injector, $q) {
        return {
          'request': function (config) {
            // Only intercept calls to the api.
            if (config.url.indexOf(coreService.getApiBaseUrl() + '/api/') !== 0) {
              return config;
            }
            // This will be an asynchronous operation. Todo: Make sure there are not multiple simultaneous calls.
            var deferred = $q.defer();
            // Injected manually to get around circular dependency problem.
            var authenticationService = $injector.get('app.authentication.service');
            // Try to get a valid access token.
            authenticationService.getAccessToken().then(
              // Success.
              function (accessToken) {
                // Add the authentication header.
                config.headers['Authentication'] = 'bearer ' + accessToken;
                // Allow the request.
                deferred.resolve(config);
              },
              // Failure
              function (/*reason*/) {
                // Stop the request.
                deferred.reject();
              }
            );
            // Stall the request until the operation finished.
            return deferred.promise;
          }
        };
      }
    ]);
  }

})();
