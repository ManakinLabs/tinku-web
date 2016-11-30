'use strict';

/**
 * @ngdoc function
 * @name tinkuApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the tinkuApp
 */
angular.module('tinkuApp')
  .controller('IndexCtrl', ['$scope', '$state','eventsService', '$log', function($scope, $state, eventsService, $log) {
    
    $scope.query;

    $scope.search = function() {
      $state.go('index.search', { q: encodeURIComponent($scope.query) });
    };

    $scope.featured = eventsService.getFeatured();

    
      
  }]);