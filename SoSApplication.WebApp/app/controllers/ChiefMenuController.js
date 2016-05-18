(function () {
    'use strict';
    var app = angular.module('sosApp');
    console.log("Hello");
    app.controller('ChiefMenuController', ['$scope', function ($scope) {
        $scope.text = "Hello";
    }]);
}());