app.controller('loginController', function($scope, $window, userInfo) {
  $scope.firstTimeUser = false;
  $scope.returningUser = false;
  $scope.invalidUser = false;
  $scope.emailField = true;
  $scope.id;
  $scope.errors = [];

  $scope.checkUsername = function() {
    userInfo.checkEmail().then(function(result) {

      result.forEach(function(user) {
        if (user.email === $scope.email) {
          $scope.emailField = false;
          $scope.name = user.name;
          $scope.id = user.sfid;
        }
      })
      if ($scope.id !== null && $scope.id !== undefined && $scope.id !== '') {
        userInfo.checkForReturningUser().then(function(result) {
          if (result.length === 0) {
            $scope.firstTimeUser = true;
            userInfo.postUserInfo($scope.id, $scope.email);
          } else {
            result.forEach(function(user) {
              if ($scope.id === user.contactId) {
                if (user.password !== null && user.password !== undefined && user.password !== '') {
                  $scope.returningUser = true;
                } else {
                  $scope.firstTimeUser = true;
                }
              } else {
                userInfo.postUserInfo($scope.id, $scope.email);
              }
            })
          }
        });
      } else {
        $scope.invalidUser = true;
      }
    })
  };

  $scope.setPassword = function() {
    if($scope.newPasswordOne === $scope.newPasswordTwo) {
      userInfo.postPassword($scope.id, $scope.newPasswordOne).then(function(result) {
        $window.location.href = '/#/summary';
      });
    }
    else {
      $scope.errors.push('Passwords don\'t match!');
    }
  };

  $scope.checkPassword = function() {
    userInfo.checkPassword($scope.id).then(function(result) {
      var password = result.data[0].password;
      if (password !== $scope.password) {
        $scope.errors.push('Invalid Password');
      }
      else {
        $window.location.href = '/#/summary';
      }
    })
  };
})
