var controllers = angular.module('myapp.controllers', []);

controllers.controller('IndexController', ['$scope', function($scope){
  $scope.message = 'Hello I am the HOME PAGE';
}]);


controllers.controller('AboutController', ['$scope', function($scope){
  $scope.message = 'Hello I am the ABOUT PAGE';
}]);

controllers.controller('NeedsController', ['$scope', function($scope){
  $scope.message = 'Hello I am the Needs PAGE';
  $scope.needs=[];

  $scope.addNeeds=function(thingy){
    $scope.needs.push(thingy);
    $scope.newNeed="";
  };

}]);