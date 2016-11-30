'use strict';

/**
 * @ngdoc service
 * @name tinkuApp.SearchService
 * @description
 * # SearchService
 * Service in the tinkuApp.
 */
angular.module('tinkuApp')
  .factory('searchService', [ function () {
    
    //Local Variables
    //var serviceBase = 'http://tinkuauth.azurewebsites.net/';
    var searchResults = [
      {'type':'event', 'id': '1', 'name':'The ELIMINATE Soccer Cup', 'date':'2016-11-22', 'location':'Hiatt Pl NW, Washington, DC 20010','img':'/images/events/1.jpg','description':'We are collecting funds for the ELIMINATE project, which aims to eradicate maternal and neonatal diseases in over 30 developing countries.'},
      {'type':'event', 'id': '2', 'name':'Lets Dance', 'date':'2017-02-02', 'location':'Hiatt Pl NW, Washington, DC 20010','img':'/images/events/2.jpg','description':'description'},
      {'type':'event', 'id': '3', 'name':'Concert!', 'date':'2017-03-03', 'location':'Hiatt Pl NW, Washington, DC 20010','img':'/images/events/3.jpg','description':'description'},
      {'type':'event', 'id': '4', 'name':'Bike-a-thon!', 'date':'2017-04-04', 'location':'Hiatt Pl NW, Washington, DC 20010','img':'/images/events/4.jpg','description':'description'},
      {'type':'event', 'id': '5', 'name':'The Best Passage!', 'date':'2017-05-05', 'location':'Hiatt Pl NW, Washington, DC 20010','img':'/images/events/5.jpg','description':'description'},
      {'type':'need', 'id': '6', 'name':'The ELIMINATE Project', 'date':'', 'location':'Hiatt Pl NW, Washington, DC 20010','img':'/images/needs/1.jpg','description':'With The Eliminate Project, Kiwanis International and UNICEF have joined forces to eliminate maternal and neonatal tetanus.'},
      {'type':'need', 'id': '7', 'name':'The ELIMINATE Project', 'date':'', 'location':'Hiatt Pl NW, Washington, DC 20010','img':'/images/needs/1.jpg','description':'With The Eliminate Project, Kiwanis International and UNICEF have joined forces to eliminate maternal and neonatal tetanus.'},
      {'type':'ong', 'id': '8', 'name':'UNICEF', 'date':'', 'location':'Hiatt Pl NW, Washington, DC 20010','img':'/images/ongs/UNICEF.jpg','description':'description'},
      {'type':'ong', 'id': '9', 'name':'UNICEF', 'date':'', 'location':'Hiatt Pl NW, Washington, DC 20010','img':'/images/ongs/2.png','description':'description'},
      {'type':'cause', 'id': '10', 'name':'Children', 'date':'', 'location':'Hiatt Pl NW, Washington, DC 20010','img':'/images/causes/children.png','description':'description'},
      {'type':'cause', 'id': '11', 'name':'Education', 'date':'', 'location':'Hiatt Pl NW, Washington, DC 20010','img':'/images/causes/education.png','description':'description'},
      ];

    var searchServiceFactory = {};

    var _getFeatured = function () {
      //var deferred = $q.defer();
      //return $http.get(serviceBase + 'resources/events/featured/');
      return searchResults;
    };

    var _getAll = function () {
      return searchResults;
    };

    searchServiceFactory.getFeatured = _getFeatured;
    searchServiceFactory.getAll = _getAll;

    return searchServiceFactory;

  }]);
