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
      templateUrl: "partials/default.html"
    })
    .state('default.index', {
      url: "/",
      views: {
        '@' : {
          templateUrl: 'partials/index/default.tpl.html',
          controller: 'IndexCtrl as index'
        },
        'footer@default.index' : { templateUrl: 'partials/core/footer.tpl.html',},
      },
    })
    //Index
    .state('index', {
      views: {
        '@' : {
          templateUrl: 'partials/index.html',
        },
        'navbar@index' : { templateUrl: 'partials/core/navbar-index.tpl.html',},
      }
    })
    .state('index.about', {
      url: "/about",
      templateUrl: 'partials/index/about.tpl.html'

      // views: {
      //   '@' : {
      //     templateUrl: 'partials/index/about.tpl.html',    
      //   },
      //   'footer@index.about' : { templateUrl: 'partials/core/footer.tpl.html',},
      // }
    })
    .state('index.login', {
      url: "/login",
      templateUrl: "partials/index/login.tpl.html"
    })
    .state('index.event', {
      url: "/event/:id",
      templateUrl: "partials/index/event.tpl.html", 
      controller: 'EventCtrl'
    })
    .state('index.events', {
      url: "/events",
      templateUrl: "partials/index/events.tpl.html", 
      controller: 'EventsCtrl as events'
    })
    .state('index.cause', {
      url: "/cause/:id",
      templateUrl: "partials/index/cause.tpl.html", 
      controller: 'CauseCtrl'
    })
    .state('index.causes', {
      url: "/causes",
      templateUrl: "partials/index/causes.tpl.html", 
      controller: 'CausesCtrl as causes'
    })
    .state('index.ong', {
      url: "/ong/:id",
      templateUrl: "partials/index/ong.tpl.html", 
      controller: 'OngCtrl'
    })
    .state('index.ongs', {
      url: "/ongs",
      templateUrl: "partials/index/ongs.tpl.html", 
      controller: 'OngsCtrl as ongs'
    })
    .state('index.need', {
      url: "/need/:id",
      templateUrl: "partials/index/need.tpl.html", 
      controller: 'NeedCtrl'
    })
    .state('index.needs', {
      url: "/needs",
      templateUrl: "partials/index/needs.tpl.html", 
      controller: 'NeedsCtrl'
    })
    .state('index.search', {
      url: "/search?q",
      templateUrl: "partials/index/search.tpl.html", 
      controller: 'SearchCtrl as search'
    })

    
    //App
    .state('app', {
      url: "/app",
      templateUrl: "partials/app.html"
    })
    .state('app.home', {
      url: "/home",
      templateUrl: "partials/app/home.tpl.html",
      controller: 'HomeCtrl'
      //, data: {requiredLogin: true}
    })
    .state('app.profile', {
      url: "/profile",
      templateUrl: "partials/app/profile.tpl.html"
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