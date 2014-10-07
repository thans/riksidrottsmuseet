'use strict';

/**
 * @ngdoc overview
 * @name riksidrottsmuseetApp
 * @description
 * # riksidrottsmuseetApp
 *
 * Main module of the application.
 */
angular
  .module('riksidrottsmuseetApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
