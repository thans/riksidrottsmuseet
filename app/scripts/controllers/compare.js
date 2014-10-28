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
    $scope.compareUsers = [];
    var passedUsers = $routeParams.compareUsers.split('+');
    console.log('passed', passedUsers);
    for (var num in passedUsers) {
        for (var user in $scope.users) {
            if ($scope.users[user].number === passedUsers[num]) {
                $scope.compareUsers.push($scope.users[user]);
                console.log($scope.users[user]);
                break;
            }
        }
    }

  });
