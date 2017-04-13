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
          $scope.name = user.firstName + ' ' + user.lastName;
          $scope.id = user.salesforce_Id;

          user.password === null ? $scope.firstTimeUser = true : $scope.returningUser = true;
        }
      })
      if ($scope.firstTimeUser === false && $scope.returningUser === false) {
        $scope.invalidUser = true;
      }
      else {
        $scope.invalidUser = false;
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
