/**
 * Authentication Not Logged In Controller Tests.
 */
'use strict';

describe('Controller: app.authentication.notLoggedInController', function () {

  // Define the Angular services used by this test suite.
  var $controller, $q, $rootScope;

  // Called before each test. Initialises the Angular services used by this test suite,
  // and generates the mock services/dependencies used by the tests.
  beforeEach(function () {

    // Specify the module of the functionality to test.
    module('app.authentication');

    // Initialises the Angular services used by this test suite.
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

  // Creates the mock services/dependencies and defines their mock functions.
  function getMocks() {

    // Contains the mock services/dependencies used by the tests.
    var mocks = {
      mockCoreService: {},
      getControllerToTest: getControllerToTest
    };

    // Create mock services/dependencies and define their mock functions.
    mocks.mockCoreService = jasmine.createSpyObj('coreService', ['getLoginUrl']);

    // Define default return values for the mock functions.
    var getLoginUrlPromise = $q.when('FAKELOGINURL');
    mocks.mockCoreService.getLoginUrl.and.returnValue(getLoginUrlPromise);

    /// Returns the controller to test, injected with the mocked services/dependencies.
    function getControllerToTest() {

      var controller = $controller('app.authentication.notLoggedInController', {
        notLoggedInDataService: mocks.mockCoreService
      });

      return controller;
    }

    return mocks;
  }
});
