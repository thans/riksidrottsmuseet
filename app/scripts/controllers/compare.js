'use strict';
/*global $:false */
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
    $('#goBack').show();
    var passedUsers = $routeParams.compareUsers.split('+');

    for (var num in passedUsers) {
        for (var user in $scope.users) {
            if ($scope.users[user].number === passedUsers[num]) {
                $scope.compareUsers.push($scope.users[user]);
                break;
            }
        }
    }

    var fastest = 9007199254740992;
    var hardestThrow = 0;
    var mostSteps = 0;

    $scope.stats = {
        fastest: {
            userNum: 0,
            userName: '',
            result: ''
        },
        throwing: {
            userNum: 0,
            userName: '',
            result: ''
        },
        steps: {
            userNum: 0,
            userName: '',
            result: ''
        }
    };

    for (var i in $scope.compareUsers) {
        var aUser = $scope.compareUsers[i];
        if (aUser.reaction < fastest) {
            fastest = aUser.reaction;
            $scope.stats.fastest.userNum = aUser.number;
            $scope.stats.fastest.userName = aUser.name;
            $scope.stats.fastest.result = fastest;
        }

        if (aUser.throwing > hardestThrow) {
            hardestThrow = aUser.throwing;
            $scope.stats.throwing.userNum = aUser.number;
            $scope.stats.throwing.userName = aUser.name;
            $scope.stats.throwing.result = hardestThrow;
        }

        if (aUser.steps > mostSteps) {
            mostSteps = aUser.steps;
            $scope.stats.steps.userNum = aUser.number;
            $scope.stats.steps.userName = aUser.name;
            $scope.stats.steps.result = mostSteps;
        }
    }
});
