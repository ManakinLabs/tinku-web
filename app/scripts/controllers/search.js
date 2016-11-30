'use strict';

/**
 * @ngdoc function
 * @name tinkuApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the tinkuApp
 */
angular.module('tinkuApp')
  .controller('SearchCtrl',['$scope','$stateParams', 'searchService','$log', '$location','$filter', function ($scope, $stateParams, searchService, $log, $location, $filter) {

    var results = searchService.getAll();
    //$log.log(results);

    $scope.searchResults = [];
    $scope.query = '';

    var qs = $location.search();

    if (qs['q'] != '' ) {
        $scope.query = decodeURIComponent(qs['q']);
    }

    $scope.searchResults = searchService.getAll();
    //$scope.searchResults = $filter('searchFilter')(results);
    //Create a general search with all stuff, then separate it by all, events, causes and ongs with pills ;)
    
  }])
  .filter('searchFilter', function () {
    return function (input, searchTerm) {
        var output = [];
        if (searchTerm == null) {
            output = input;
        }
        else {
            angular.forEach(input, function (item) {
                if (item.name.toLowerCase().match(searchTerm.toLowerCase())) {
                    output.push(item)
                }
            });
        }
        return output;
    }
});
