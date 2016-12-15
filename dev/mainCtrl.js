(function() {
  'use strict';
  angular.module('chatroom').controller('mainCtrl', ['$scope', 'msgService', function($scope, msgService) {

    $scope.getMessage = function() {
      msgService.getMessage().then(function(response) {
        $scope.messages = response.data;
      });
    };

    $scope.postMsg = function(message) {
      msgService.postMsg(message).then(function(response) {
        $scope.message = '';
      });
    };

    $scope.getCookies = function() {
      msgService.getCookies().then(function(response) {
        $scope.messages = response.data.cookies;
        console.log(response);
      });
    };

    $scope.getCookies();

    $scope.postCookie = function() {
      msgService.postCookie().then(function(response) {
        $scope.message = ''
      });
    };

    //uncomment this code when your getMessages function is finished
    //This goes and gets new data every second, which mimicking a chat room experience.

    setInterval(function() {
      $scope.getMessage();
    
    }, 3000)

  }]);
})();
