'use strict';
/*global $:false */
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
    $scope.compareBlink = false;

    $scope.checkCompare = function() {
        var checked = 0;

        $('.compareMe').each(function() {
            if (this.checked) {
                checked++;
            }
        });

        if (checked >= 2 && !$scope.compareBlink) {
            $scope.compareBlink = true;
            $('#compareButton').addClass('compareClick blink');
            
        } else {
            $scope.compareBlink = false;
            // stop the blinking;
            $('#compareButton').removeClass('compareClick blink');
        }
    };

    $scope.compareUsers = function() {
        // get all users that are checked
        // pass them all to the compare
        var selected = [];

        $('.compareMe').each(function() {
            if (this.checked) {
                selected.push(this.value);
            }
        });

        if (selected.length  < 2) {
            // error - need at least 2 people to compare
            // TODO nice popup
            console.error('You need to compare at least 2 people');
        }

        $location.path('/compare').search({compareUsers: selected.join('+')});
    };
  });
