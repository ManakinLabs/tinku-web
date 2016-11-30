'use strict';

describe('Controller: SearchNavbarCtrl', function () {

  // load the controller's module
  beforeEach(module('tinkuApp'));

  var SearchNavbarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SearchNavbarCtrl = $controller('SearchNavbarCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SearchNavbarCtrl.awesomeThings.length).toBe(3);
  });
});
