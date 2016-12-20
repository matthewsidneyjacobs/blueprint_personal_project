angular.module('app')
.controller('mainCtrl', function($scope) {
  $scope.test = "this is working"



  $scope.menuButtons = ['home', 'about', 'blueprints'];
  $scope.activeMenu = 'home';


  $scope.changeActive = function(menuButton) {
    $scope.activeMenu = menuButton;
  }

})
