/**
 * This is the authorization accounts controller.
 * @memberOf Authorization Module
 * @namespace Authorization Accounts Controller
 */
(function () {
  'use strict';

  // Register the controller.
  angular.module('app.authorization').controller('app.authorization.accountsController', AccountsController);

  // Inject the dependencies.
  AccountsController.$inject = ['app.authorization.accountsDataService'];

  /**
   * @name accountsController
   * @desc Create the controller.
   * @param accountsDataService
   * @memberOf Authorization Module.Authorization Accounts Controller
   */
  function AccountsController(accountsDataService) {

    // Assign this controller as the view-model.
    // It will be accessible as 'accountsController' within the HTML template.
    var vm = this;

    // Register the view model's properties.
    vm.accounts = [];

    // Load the virtual cards.
    accountsDataService.getAccounts().then(
      // Success.
      function (data) {
        vm.accounts = data.accounts;
      },
      // Failure.
      function (/* status */) {
        // Deal with it!
      });
  }

})();
