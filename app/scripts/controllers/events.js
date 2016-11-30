'use strict';

/**
 * @ngdoc function
 * @name tinkuApp.controller:EventsCtrl
 * @description
 * # EventsCtrl
 * Controller of the tinkuApp
 */
angular.module('tinkuApp')
  .controller('EventsCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  
  //TODO: Change this stuff
  .filter('eventsByName', function () {
    return function (input, query) {
        var output = [];
        
        angular.forEach(input, function (event) {
            if (event.name.match(query)) {
                output.push(event)
            }
        });

        return output;
    }
});