'use strict';

/**
 * @ngdoc function
 * @name tinkuApp.controller:EventCtrl
 * @description
 * # EventCtrl
 * Controller of the tinkuApp
 */
angular.module('tinkuApp')
  .controller('EventCtrl', [ '$scope', '$location','$log','$stateParams','eventsService' , function ($scope, $location, $log, $stateParams, eventsService) {
    $scope.view_tab='tab1';
    $scope.event = {};
    $scope.visible = false;
    var eventId='';

    if ($stateParams['id'] != '') {
        eventId = decodeURIComponent($stateParams['id']);
    }

    $scope.event = eventsService.getById(eventId);

    $scope.changeTab = function(tab) {
        $scope.view_tab = tab;
    }

    
             

  }]);
