
var clientId = 'WqDAlwLEQvV2NqfiEaWBa7sWg9mE6A9f';
var domain = 'app66452704.auth0.com';


var app = angular.module('herokuCommunities', ['ui.router', 'ngCookies']);

app.config(function($stateProvider) {
  $stateProvider
  .state('login', {
    url:'/',
    controller: 'loginController',
    templateUrl: 'partials/login.html'
  })
  .state('summary', {
    url:'/summary',
    controller: 'contactRecordController',
    templateUrl: 'partials/summary.html'
  })
})
