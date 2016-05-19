(function () {

    var app = angular.module('sosApp', ['ui.router']);
    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
        .state('/', {
            url: '/',
            templateUrl: 'index.html'
        })
        .state('behovsbedomning', {
            url: '/app/templates/chosenTab1.html',
            template: 'Tab1'
        })
    });
}());

