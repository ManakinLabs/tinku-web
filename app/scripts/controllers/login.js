'use strict';

/**
 * @ngdoc function
 * @name tinkuApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the tinkuApp
 */
// angular.module('tinkuApp')
//   .controller('LoginSignupCtrl', function ($scope, $auth, $state) {
//     $scope.login = function () {
//       $auth
//       .login({email: $scope.email, password: $scope.password})
//       .then(function (response) {
//         $auth.setToken(response);
//         $state.go('app.home');
//       })
//       .catch(function (response) {
//         console.log("error response", response);
//       })
//     };
    
//     $scope.signUp = function () {
//       $auth
//       .signup({email: $scope.email, password: $scope.password})
//       .then(function (response) {
//         $auth.setToken(response);
//         $state.go('app.home');//TODO: Point to and implement signup  
//       })
//       .catch(function (response) {
//         console.log("error response", response);
//       })
//     };
//   });