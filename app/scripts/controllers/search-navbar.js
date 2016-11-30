'use strict';

/**
 * @ngdoc function
 * @name tinkuApp.controller:SearchNavbarCtrl
 * @description
 * # SearchNavbarCtrl
 * Controller of the tinkuApp
 */
angular.module('tinkuApp')
  .controller('SearchNavbarCtrl', ["$scope", "$stateParams",'$log','$location', function ($scope, $stateParams, $log, $location) {

    $scope.query = '';//decodeURIComponent($stateParams.q);

    var qs = $location.search();

    if (qs['q'] != '') {
        $scope.query = decodeURIComponent(qs['q']);
    }

    $scope.update = function() {
        // update the query string with the new filters
        if ($scope.query != '') {
            $location.search('q', encodeURIComponent($scope.query));
        } else {
            // remove empty filters
            $location.search('q', null);
        }
    }

    $scope.update();

  }]);
