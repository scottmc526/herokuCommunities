app.controller('contactRecordController', function ($scope, $cookies, $window, userInfo) {
  $scope.userId = $cookies.get('user');
  $scope.name = '';
  $scope.email = ''

  userInfo.getContactRecord($scope.userId).then(function(result) {
    $scope.email = result.data[0].email;
    $scope.name = result.data[0].name;
  })

  $scope.logOut = function() {
    $cookies.remove('user');
    $window.location.href = '/#/';
  }
})
