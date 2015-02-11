/**
 * This is the authentication access code data service.
 * @memberOf Authentication Module
 * @namespace Authentication AccessCode Data Service
 */
(function () {
  'use strict';

  // Register the service.
  angular.module('app.authentication').service('app.authentication.accessCodeDataService', AccessCodeDataService);

  // Inject the dependencies.
  AccessCodeDataService.$inject = ['$q', '$http', 'app.core.service'];

  /**
   * @name AccessCodeDataService
   * @desc Create the data service.
   * @param $q
   * @param $http
   * @param coreService
   * @memberOf Authentication Module.Authentication AccessCode Data Service
   */
  function AccessCodeDataService($q, $http, coreService) {

    /**
     * @name AccessCodeDataService.getAccessCode
     * @desc Call the API to get a list of all accesscode.
     * @memberOf Authentication Module.Authentication AccessCode Data Service
     * @returns object An object with a list of accesscode.
     */
    this.getAccessToken = function (accessCode) {
      // Create the future.
      var deferred = $q.defer();
      // Usually you would get the data here via AJAX call to an API.
      $http({
        url: coreService.getApiBaseUrl() + '/authentication/accesscode',
        method: 'POST',
        data: {accesscode: accessCode}
      }).success(function (data /*, status, headers, config */) {
        // This callback will be called asynchronously when the response is available.
        deferred.resolve(data);
      }).error(function (data, status/*, headers, config*/) {
        // Called asynchronously if an error occurs or server returns response with an error status.
        deferred.reject(status);
      });
      // Return the promise.
      return deferred.promise;
    };
  }

})();
