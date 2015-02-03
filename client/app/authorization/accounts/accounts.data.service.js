/**
 * This is the authorization accounts data service.
 * @memberOf Authorization Module
 * @namespace Authorization Accounts Data Service
 */
(function () {
  'use strict';

  // Register the service.
  angular.module('app.authorization').service('app.authorization.accountsDataService', AccountsDataService);

  // Inject the dependencies.
  AccountsDataService.$inject = ['$q', '$http'];

  /**
   * @name AccountsDataService
   * @desc Create the data service.
   * @param $q
   * @param $http
   * @memberOf Authorization Module.Authorization Accounts Data Service
   */
  function AccountsDataService($q /*, $http */) {

    /**
     * @name AccountsDataService.getAccounts
     * @desc Call the API to get a list of all accounts.
     * @memberOf Authorization Module.Authorization Accounts Data Service
     * @returns object An object with a list of accounts.
     */
    this.getAccounts = function () {
      // Create the future.
      var deferred = $q.defer();
      // Usually you would get the data here via AJAX call to an API.
      //$http.get('/authorization/accounts').
      //  success(function(data, status, headers, config) {
      //    // this callback will be called asynchronously when the response is available
      //    deferred.resolve(data);
      //  }).
      //  error(function(data, status, headers, config) {
      //    // called asynchronously if an error occurs or server returns response with an error status.
      //    deferred.reject(status);
      //  }
      //);
      // But for now we just resolve with dummy data right away.
      deferred.resolve({
        accounts: [
          {name: 'Bernd Wessels', number: '12345', expiryMonth: 5, expiryYear: 15},
          {name: 'Wonder Woman', number: '54321', expiryMonth: 9, expiryYear: 11}
        ]
      });
      // Return the promise.
      return deferred.promise;
    };
  }

})();
