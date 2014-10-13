'use strict';

/**
 * @ngdoc function
 * @name riksidrottsmuseetApp.controller:DetailCtrl
 * @description
 * # DetailCtrl
 * Controller of the riksidrottsmuseetApp
 */
angular.module('riksidrottsmuseetApp')
  .controller('DetailCtrl', function ($scope, $routeParams) {
    for (var user in $scope.users) {
        if ($scope.users[user].number === $routeParams.userNumber) {
            $scope.selectedUser = $scope.users[user];
            console.log(user);
            break;
        }
    }
  });
