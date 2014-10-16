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
        steps: 300,
        throwing: 45,
        reaction: 0.65
    }, {
        number: '2',
        name: 'Marie',
        heartRate: 89,
        steps: 482,
        throwing: 51,
        reaction: 0.39
    }, {
        number: '3',
        name: '-',
        heartRate: 67,
        steps: 135,
        throwing: 37,
        reaction: 0.81
    }, {
        number: '4',
        name: '-',
        heartRate: 132,
        steps: 576,
        throwing: 68,
        reaction: 0.76
    }, {
        number: '5',
        name: 'Emma',
        heartRate: 94,
        steps: 1139,
        throwing: 44,
        reaction: 0.28
  },{
        number: '6',
        name: 'Daniel',
        heartRate: 106,
        steps: 328,
        throwing: 72,
        reaction: 0.46
    }, {
        number: '7',
        name: 'Elin',
        heartRate: 96,
        steps: 467,
        throwing: 73,
        reaction: 0.53
    }, {
        number: '8',
        name: '-',
        heartRate: 103,
        steps: 342,
        throwing: 38,
        reaction: 0.51
    }, {
        number: '9',
        name: '-',
        heartRate: 76,
        steps: 672,
        throwing: 91,
        reaction: 0.44
    }, {
        number: '10',
        name: 'Elvira',
        heartRate: 111,
        steps: 987,
        throwing: 65,
        reaction: 0.46
  },{
        number: '11',
        name: 'Robin',
        heartRate: 132,
        steps: 274,
        throwing: 61,
        reaction: 0.28
    }, {
        number: '12',
        name: 'Sofie',
        heartRate: 98,
        steps: 167,
        throwing: 72,
        reaction: 0.31
    }, {
        number: '13',
        name: '-',
        heartRate: 67,
        steps: 135,
        throwing: 48,
        reaction: 0.5
    }, {
        number: '14',
        name: '-',
        heartRate: 132,
        steps: 576,
        throwing: 49,
        reaction: 0.6
    }, {
        number: '15',
        name: 'Tore',
        heartRate: 76,
        steps: 50,
        throwing: 54,
        reaction: 0.8
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
      $rootScope.users[i].heartRate = Math.max($rootScope.users[i].heartRate, 64);
      $rootScope.users[i].heartRate = Math.min($rootScope.users[i].heartRate, 180);
    }
    $rootScope.$apply();
  }, 15000);
});
