/**
 * This is the shared dependencies module. It will be referenced by most application modules.
 * Only declare the module's dependencies in this file.
 * @namespace Application Core Module
 */
(function () {
  'use strict';

  // Create the shared dependencies module.
  angular.module('app.core', [
      // Angular modules.
      'ngCookies',
      'ngResource',
      'ngSanitize',
      // 3rd-party modules.
      'angular-jwt',
      'angular-storage',
      'LocalStorageModule',
      'pascalprecht.translate',
      'ui.bootstrap',
      'ui.grid',
      'ui.router'
    ]
  );

})();
