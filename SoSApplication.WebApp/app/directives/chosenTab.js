(function () {
    'use strict';

    var app = angular.module('sosApp');
    app.directive('chosenTab', function () {
        return {
            restrict: 'E',
            transclude: true,
            template: 'showTab()',
            controller: function ($scope) {
                $scope.showTab = function () {
                    return window.URL('templates/chosenTab1.html');
                }
            }
        }
    });

}());