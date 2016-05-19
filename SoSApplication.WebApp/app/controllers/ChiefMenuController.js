(function () {
    'use strict';
    var app = angular.module('sosApp');
    app.controller('ChiefMenuController', ['$scope', function ($scope) {
        $scope.mainPageTabs = [{
            id: 1,
            title: 'Behovsbedömning',
            url: 'app/templates/chosenTab1.html'
        }, {
            id: 2,
            title: 'Prioritera delområden',
            url: 'app/templates/chosenTab2.html'
        }];
        $scope.currentTab = 1;
        $scope.isActiveTab = function (id) {
            return id == $scope.currentTab;
        }
        $scope.message = "Hello!";

        $scope.currentTabUrl = 'app/templates/chosenTab1.html';
        $scope.showTab = function (url) {
            return url == $scope.currentTabUrl;
        }
    }]);
}());