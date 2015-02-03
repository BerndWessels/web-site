// Include Jasmine
/// <reference path="../../bower_components/jasmine/lib/jasmine-core/jasmine.js" />
/// <reference path="../../bower_components/jasmine/lib/jasmine-core/jasmine-html.js" />

// Include Bower Components
/// <reference path="../../bower_components/jquery/dist/jquery.js" />
/// <reference path="../../bower_components/angular/angular.js" />
/// <reference path="../../bower_components/angular-mocks/angular-mocks.js" />
/// <reference path="../../bower_components/angular-resource/angular-resource.js" />
/// <reference path="../../bower_components/angular-cookies/angular-cookies.js" />
/// <reference path="../../bower_components/angular-sanitize/angular-sanitize.js" />
/// <reference path="../../bower_components/angular-bootstrap/ui-bootstrap-tpls.js" />
/// <reference path="../../bower_components/lodash/dist/lodash.compat.js" />
/// <reference path="../../bower_components/angular-ui-router/release/angular-ui-router.js" />

// Include Build Components
/// <reference path="../../app/app.core.module.js" />
/// <reference path="../../app/authentication/authentication.module.js" />
/// <reference path="../../app/authentication/authentication.controller.js" />

'use strict';

describe('Controller: app.authentication.accessCodeController', function () {

  // ReSharper disable UseOfImplicitGlobalInFunctionScope

  // Uncomment this line to debug in the browser.
  //if (ReSharperReporter) ReSharperReporter.prototype.jasmineDone = function () { };

  // Define the Angular services used by this test suite.
  var $controller, $q, $rootScope;

  beforeEach(function () {
    /// <summary>
    /// Called before each test. Initialises the Angular services used by this test suite,
    /// and generates the mock services/dependencies used by the tests.
    /// </summary>

    // Specify the module of the functionality to test.
    module('app.authentication');

    // Initialises the Angular services used by this test suite.
    // ReSharper disable InconsistentNaming
    inject(function (_$controller_, _$q_, _$rootScope_) {
      $controller = _$controller_;
      $q = _$q_;
      $rootScope = _$rootScope_;
    });
  });

  describe('The controller ', function () {

    it('should be instantiated', function () {
      // Arrange.
      var mocks = getMocks();
      var controller = mocks.getControllerToTest();

      // Assert.
      expect(controller).toBeTruthy();
    });
  });

  function getMocks() {
    /// <summary>
    /// Creates the mock services/dependencies and defines their mock functions.
    /// </summary>

    // Contains the mock services/dependencies used by the tests.
    var mocks = {
      mockAccessCodeDataService: {},
      getControllerToTest: getControllerToTest
    };

    // Create mock services/dependencies and define their mock functions.
    mocks.mockAccessCodeDataService = jasmine.createSpyObj('accessCodeDataService', ['getAccessCode']);

    // Define default return values for the mock functions.
    var getAccessCodePromise = $q.when({
      accesscode: [{name: 'Bernd', number: '12345'}, {name: 'Wessels', number: '54321'}]
    });
    mocks.mockAccessCodeDataService.getAccessCode().and.returnValue(getAccessCodePromise);

    return mocks;

    /// <summary>
    /// Returns the controller to test, injected with the mocked services/dependencies.
    /// </summary>
    function getControllerToTest() {

      var controller = $controller('app.authentication.accessCodeController', {
        accessCodeDataService: mocks.mockAccessCodeDataService
      });

      return controller;
    }
  }
});
