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

  this.postUserInfo = function(id, email) {
    var info = {};
    info.id = id;
    info.email = email;
    return $http.post('registeredUsers/', info);
  }

  this.postPassword = function(id, password) {
    var info = {};
    info.password = password;
    return $http.put('registeredUsers/' + id, info)
  }

  this.checkPassword = function(id, password) {
    var info = {};
    info.id = id;
    info.password = password;
    return $http.post('registeredUsers/' + id, info);
  }
})
