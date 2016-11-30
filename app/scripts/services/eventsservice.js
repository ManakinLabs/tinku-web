'use strict';

/**
 * @ngdoc service
 * @name tinkuApp.eventsService
 * @description
 * # eventsService
 * Service in the tinkuApp.
 */
angular.module('tinkuApp')
  .factory('eventsService',[ function () {

    //Local Variables
    //var serviceBase = 'http://tinkuauth.azurewebsites.net/';
    var events = [
      {'id': '1', 'name':'The ELIMINATE Soccer Cup', 'ong':'UNICEF', 'need':'The ELIMINATE Project', 'date':'2017-01-01', 'location':'Hiatt Pl NW, Washington, DC 20010','img':'images/events/1.jpg','description':'We are collecting funds for the ELIMINATE project, which aims to eradicate maternal and neonatal diseases in over 30 developing countries.','target':'target','goal':'goal'},
      {'id': '2', 'name':'Concert!', 'ong':'UNICEF', 'need':'The ELIMINATE Project', 'date':'2017-01-02', 'location':'Hiatt Pl NW, Washington, DC 20010','img':'images/events/2.jpg','description':'description','target':'target','goal':'goal'},
      {'id': '3', 'name':'Lets Dance', 'ong':'UNICEF', 'need':'The ELIMINATE Project', 'date':'2017-01-03', 'location':'Hiatt Pl NW, Washington, DC 20010','img':'images/events/3.jpg','description':'description','target':'target','goal':'goal'},
      {'id': '4', 'name':'The best Passage!', 'ong':'UNICEF', 'need':'The ELIMINATE Project', 'date':'2017-01-04', 'location':'Hiatt Pl NW, Washington, DC 20010','img':'images/events/4.jpg','description':'description','target':'target','goal':'goal'},
      {'id': '5', 'name':'Working in the morning', 'ong':'UNICEF', 'need':'The ELIMINATE Project', 'date':'2017-01-05', 'location':'Hiatt Pl NW, Washington, DC 20010','img':'images/events/5.jpg','description':'description','target':'target','goal':'goal'},
      {'id': '6', 'name':'Bike-a-thon!', 'ong':'UNICEF', 'need':'The ELIMINATE Project', 'date':'2017-01-05', 'location':'Hiatt Pl NW, Washington, DC 20010','img':'images/events/5.jpg','description':'description','target':'target','goal':'goal'},
      ];

    var eventServiceFactory = {};

    var _getFeatured = function () {
      //var deferred = $q.defer();
      //return $http.get(serviceBase + 'resources/events/featured/');
      return events;
    };

    var _getAll = function () {
      return events;
    };

    var _getById = function (eventId) {
      // return events.find(e => e.id === eventId);
      for(var i=0; i<events.length; i++) {
          if (events[i].id == eventId) 
            return events[i];
      }
    };


    eventServiceFactory.getFeatured = _getFeatured;
    eventServiceFactory.getAll = _getAll;
    eventServiceFactory.getById = _getById;

    return eventServiceFactory;
  }]);