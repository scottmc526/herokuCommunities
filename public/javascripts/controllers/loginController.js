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
        } else {
          $scope.invalidUser = true;
        }
      })
      if ($scope.id !== null && $scope.id !== undefined && $scope.id !== '') {
        userInfo.checkForReturningUser().then(function(result) {
          if (result.length === 0) {
            $scope.firstTimeUser = true;
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
