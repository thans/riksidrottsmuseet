'use strict';

/**
 * @ngdoc overview
 * @name riksidrottsmuseetApp
 * @description
 * # riksidrottsmuseetApp
 *
 * Main module of the application.
 */
angular.module('riksidrottsmuseetApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch'
]).config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/detail', {
      templateUrl: 'views/detail.html',
      controller: 'DetailCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
}).run(function ($rootScope) {
  $rootScope.users = [{
        number: '1',
        name: 'Jacob',
        heartRate: '100',
        steps: '300'
    }, {
        number: '2',
        name: 'Marie',
        heartRate: '89',
        steps: '482'
    }, {
        number: '3',
        name: '-',
        heartRate: '67',
        steps: '135'
    }, {
        number: '4',
        name: '-',
        heartRate: '132',
        steps: '576'
    }, {
        number: '5',
        name: 'Dave',
        heartRate: '160',
        steps: '900'
  }];
});
