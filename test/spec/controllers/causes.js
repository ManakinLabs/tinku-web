'use strict';

describe('Controller: CausesCtrl', function () {

  // load the controller's module
  beforeEach(module('tinkuApp'));

  var CausesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CausesCtrl = $controller('CausesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CausesCtrl.awesomeThings.length).toBe(3);
  });
});
