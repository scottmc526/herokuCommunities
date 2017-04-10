var app = angular.module('herokuCommunities', ['auth0.lock', 'angular-jwt', 'ui.router']);

app.config(function($stateProvider, lockProvider, $urlRouterProvider) {
  $stateProvider
  .state('login', {
    url:'/',
    controller: 'loginController',
    templateUrl: 'partials/login.html'
  })


})
