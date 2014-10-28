'use strict';

/**
 * @ngdoc function
 * @name riksidrottsmuseetApp.controller:CompareCtrl
 * @description
 * # CompareCtrl
 * Controller of the comparisons in riksidrottsmuseetApp
 */
angular.module('riksidrottsmuseetApp')
  .controller('CompareCtrl', function ($scope, $routeParams) {
    for (var user in $scope.users) {
        if ($scope.users[user].number === $routeParams.userNumber) {
            $scope.selectedUser = $scope.users[user];
            console.log(user);
            break;
        }
    }
  });
