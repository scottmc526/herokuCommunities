app.service('userInfo', function($http) {
  this.checkEmail = function() {
    return $http.get('users').then(function(response) {
      return response.data;
    })
  }

  this.checkForReturningUser = function() {
    return $http.get('registeredUsers').then(function(response) {
      return response.data;
    })
  }

  // this.postPassword = function(userId, password) {
  //   var info = {};
  //   info.password = password;
  //   return $http.put('users/' + userId, info)
  // }
  //
  // this.checkPassword = function(userId) {
  //   return $http.get('users/' + userId);
  // }
})
