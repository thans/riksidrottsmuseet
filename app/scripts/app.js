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
        heartRate: 100,
        steps: 300
    }, {
        number: '2',
        name: 'Marie',
        heartRate: 89,
        steps: 482
    }, {
        number: '3',
        name: '-',
        heartRate: 67,
        steps: 135
    }, {
        number: '4',
        name: '-',
        heartRate: 132,
        steps: 576
    }, {
        number: '5',
        name: 'Dave',
        heartRate: 94,
        steps: 1139
  },{
        number: '6',
        name: 'Jacob',
        heartRate: 106,
        steps: 328
    }, {
        number: '7',
        name: 'Marie',
        heartRate: 96,
        steps: 467
    }, {
        number: '8',
        name: '-',
        heartRate: 103,
        steps: 342
    }, {
        number: '9',
        name: '-',
        heartRate: 76,
        steps: 672
    }, {
        number: '10',
        name: 'Dave',
        heartRate: 111,
        steps: 987
  },{
        number: '11',
        name: 'Jacob',
        heartRate: 132,
        steps: 274
    }, {
        number: '12',
        name: 'Marie',
        heartRate: 98,
        steps: 167
    }, {
        number: '13',
        name: '-',
        heartRate: 67,
        steps: 135
    }, {
        number: '14',
        name: '-',
        heartRate: 132,
        steps: 576
    }, {
        number: '15',
        name: 'Dave',
        heartRate: 160,
        steps: 900
  }];

  setInterval(function() {
    for (var i = 0; i < $rootScope.users.length; i++) {
      $rootScope.users[i].steps += Math.floor(Math.random() * 11) + 1;
    }
    $rootScope.$apply();
  }, 5000);

  setInterval(function() {
    for (var i = 0; i < $rootScope.users.length; i++) {
      var addRate = Math.floor(Math.random() * 2) + 1;
      if (addRate === 2) {
        addRate = -1;
      }
      addRate *= Math.floor(Math.random() * 4) + 1;
      $rootScope.users[i].heartRate += addRate;
    }
    $rootScope.$apply();
  }, 15000);
});
