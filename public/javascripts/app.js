
var clientId = 'WqDAlwLEQvV2NqfiEaWBa7sWg9mE6A9f';
var domain = 'app66452704.auth0.com';


var app = angular.module('herokuCommunities', ['ui.router']);

app.config(function($stateProvider) {
  $stateProvider
  .state('login', {
    url:'/',
    controller: 'loginController',
    templateUrl: 'partials/login.html'
  })
  .state('summary', {
    url:'/summary',
    templateUrl: 'partials/summary.html'
  })
})
