/**
 * This is the authentication service.
 * @memberOf Authentication Module
 * @namespace Authentication Service
 */
(function () {
  'use strict';

  // Register the service.
  angular.module('app.authentication').service('app.authentication.service', Service);

  // Inject the dependencies.
  Service.$inject = ['$q', 'localStorageService', 'jwtHelper', '$http', 'app.core.service'];

  /**
   * @name Service
   * @desc Create the service.
   * @param $q
   * @param localStorageService
   * @param jwtHelper
   * @param $http
   * @param coreService
   * @memberOf Authentication Module.Authentication Service
   */
  function Service($q, localStorageService, jwtHelper, $http, coreService) {

    // Instance context.
    var service = this;

    // Queue access token requests.
    var getAccessTokenQueue = [];

    /**
     * @name Service.getAccessToken
     * @desc .
     * @memberOf Authentication Module.Authentication Service
     * @returns .
     */
    this.getAccessToken = function () {
      // Create the future.
      var deferred = $q.defer();
      // Push it onto the queue.
      getAccessTokenQueue.push(deferred);
      // Retrieve the access token from local storage.
      var accessToken = localStorageService.get('accessToken');
      // Return if there is no access token.
      if (!accessToken) {
        getAccessTokenQueue.forEach(function(promise){
          deferred.reject(null);
        });
        getAccessTokenQueue = [];
      }
      // Make sure the access token is still active.
      else if (service.isAccessTokenExpired()) {
        // Avoid multiple simultaneous calls.
        if(getAccessTokenQueue.length === 1) {
          // Request a new access token.
          $http({
            url: coreService.getApiBaseUrl() + '/authentication/accesstoken',
            method: 'POST',
            data: {accesstoken: accessToken}
          }).success(function (data /*, status, headers, config*/) {
            // Store the new access token.
            service.setAccessToken(data);
            // Return the new access token.
            getAccessTokenQueue.forEach(function(promise){
              promise.resolve(data);
            });
            getAccessTokenQueue = [];
          }).error(function (data, status/*, headers, config*/) {
            // Called asynchronously if an error occurs or server returns response with an error status.
            getAccessTokenQueue.forEach(function(promise){
              promise.reject({data: data, status: status});
            });
            getAccessTokenQueue = [];
          });
        }
      }
      else {
        // Return the current access token.
        getAccessTokenQueue.forEach(function(promise){
          promise.resolve(accessToken);
        });
        getAccessTokenQueue = [];
      }
      // Return the promise.
      return deferred.promise;
    };

    /**
     * @name Service.setAccessToken
     * @desc .
     * @param accessToken
     * @memberOf Authentication Module.Authentication Service
     * @returns .
     */
    this.setAccessToken = function (accessToken) {
      // Decode the JWT token.
      var decoded = jwtHelper.decodeToken(accessToken);
      // Write the expiration date to local storage.
      localStorageService.set('accessTokenExpirationDate', decoded.expirationDate);
      // Write the access token to local storage.
      return localStorageService.set('accessToken', accessToken);
    };

    /**
     * @name Service.isAccessTokenExpired
     * @desc .
     * @memberOf Authentication Module.Authentication Service
     * @returns boolean
     */
    this.isAccessTokenExpired = function () {
      // Retrieve the expiration date from local storage.
      var expirationDate = localStorageService.get('accessTokenExpirationDate');
      // Return whether it is expired or not.
      return (new Date(expirationDate) < new Date());
    };

  }
})();
