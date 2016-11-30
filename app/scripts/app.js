'use strict';

/**
 * @ngdoc overview
 * @name tinkuApp
 * @description
 * # tinkuApp
 *
 * Main module of the application.
 */
var tinkuApp = angular
  .module('tinkuApp', [
    'ngAnimate',
    'ngAria',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.bootstrap',
    'ngMap'/*, 
    'satellizer'*/
  ]);

tinkuApp.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    //Index/Default
    .state('default', {
      templateUrl: "views/default.html"
    })
    .state('default.index', {
      url: "/",
      views: {
        '@' : {
          templateUrl: 'views/default.tpl.html',
          controller: 'IndexCtrl as index'
        },
        'footer@default.index' : { templateUrl: 'views/footer.tpl.html',},
      },
    })
    //Index
    .state('index', {
      views: {
        '@' : {
          templateUrl: 'views.html',
        },
        'navbar@index' : { templateUrl: 'views/navbar-index.tpl.html',},
      }
    })
    .state('index.about', {
      url: "/about",
      templateUrl: 'views/about.tpl.html'

      // views: {
      //   '@' : {
      //     templateUrl: 'views/about.tpl.html',    
      //   },
      //   'footer@index.about' : { templateUrl: 'views/footer.tpl.html',},
      // }
    })
    .state('index.login', {
      url: "/login",
      templateUrl: "views/login.tpl.html"
    })
    .state('index.event', {
      url: "/event/:id",
      templateUrl: "views/event.tpl.html", 
      controller: 'EventCtrl'
    })
    .state('index.events', {
      url: "/events",
      templateUrl: "views/events.tpl.html", 
      controller: 'EventsCtrl as events'
    })
    .state('index.cause', {
      url: "/cause/:id",
      templateUrl: "views/cause.tpl.html", 
      controller: 'CauseCtrl'
    })
    .state('index.causes', {
      url: "/causes",
      templateUrl: "views/causes.tpl.html", 
      controller: 'CausesCtrl as causes'
    })
    .state('index.ong', {
      url: "/ong/:id",
      templateUrl: "views/ong.tpl.html", 
      controller: 'OngCtrl'
    })
    .state('index.ongs', {
      url: "/ongs",
      templateUrl: "views/ongs.tpl.html", 
      controller: 'OngsCtrl as ongs'
    })
    .state('index.need', {
      url: "/need/:id",
      templateUrl: "views/need.tpl.html", 
      controller: 'NeedCtrl'
    })
    .state('index.needs', {
      url: "/needs",
      templateUrl: "views/needs.tpl.html", 
      controller: 'NeedsCtrl'
    })
    .state('index.search', {
      url: "/search?q",
      templateUrl: "views/search.tpl.html", 
      controller: 'SearchCtrl as search'
    })

    
    //App
    .state('app', {
      url: "/app",
      templateUrl: "views/app.html"
    })
    .state('app.home', {
      url: "/home",
      templateUrl: "views/home.tpl.html",
      controller: 'HomeCtrl'
      //, data: {requiredLogin: true}
    })
    .state('app.profile', {
      url: "/profile",
      templateUrl: "views/profile.tpl.html"
      //, data: {requiredLogin: true}
    });
    $urlRouterProvider.otherwise("/");
});

// tinkuApp.config(function($authProvider) {

//     $authProvider.facebook({
//       clientId: 'Facebook App ID'
//     });
    
// });

// tinkuApp.run(function ($rootScope, $state, $auth) {
//   $rootScope.$on('$stateChangeStart',
//     function (event, toState) {
//       var requiredLogin = false;
//       // check if this state need login
//       if (toState.data && toState.data.requiredLogin)
//         requiredLogin = true;
      
//       // if yes and if this user is not logged in, redirect him to login page
//       if (requiredLogin && !$auth.isAuthenticated()) {
//         event.preventDefault();
//         $state.go('index.login-signup');
//       }
//     });
// });

tinkuApp.directive('wrapOwlcarousel', function () {
      return {
          restrict: 'E',
          link: function (scope, element, attrs) {
              var options = scope.$eval($(element).attr('data-options'));
              $(element).owlCarousel(options);
          }
      };
  });

  tinkuApp.controller('AppCtrl', ['$scope', function($scope) {
  $scope.$back = function() { 
    window.history.back();
  };
}]);