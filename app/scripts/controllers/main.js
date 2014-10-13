'use strict';

/**
 * @ngdoc function
 * @name riksidrottsmuseetApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the riksidrottsmuseetApp
 */
angular.module('riksidrottsmuseetApp')
  .controller('MainCtrl', function ($scope, $location) {
    $scope.selectUser = function(user) {
        $location.path('/detail').search({userNumber: user.number});
    };
  });
