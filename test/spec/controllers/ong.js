'use strict';

describe('Controller: OngCtrl', function () {

  // load the controller's module
  beforeEach(module('tinkuApp'));

  var OngCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OngCtrl = $controller('OngCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OngCtrl.awesomeThings.length).toBe(3);
  });
});
