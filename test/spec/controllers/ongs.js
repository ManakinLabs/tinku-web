'use strict';

describe('Controller: OngsCtrl', function () {

  // load the controller's module
  beforeEach(module('tinkuApp'));

  var OngsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OngsCtrl = $controller('OngsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OngsCtrl.awesomeThings.length).toBe(3);
  });
});
