(function() {
  'use strict';
  angular.module('chatroom').service('msgService', ['$http', function($http) {

    const baseUrl = 'https://practiceapi.devmounta.in/api/chats';

    this.getMessage = () => {
      console.log('getMessages is running from msgService');
      return $http( {
        method: 'GET',
        url: baseUrl
       })
      // .then(function(response) {
      //   console.log(response);
      //   return response;
      // });
    }

  this.postMsg = (message) => {
    console.log('postMessages is running from msgService');
    return $http({
      method: 'POST',
      url: baseUrl,
      data: {message: message}
    })
    .then(function(response) {
      console.log(response);
      return response;
    });
  };
    
  this.getCookies = function() {
    return $http ({
      method: 'GET',
      url: "http://practiceapi.devmounta.in/api/cookies"
    });
  };
          
  this.postCookie = (cookie) => {
    return $http ({
      method: 'POST',
      url: baseUrl,
      data: {
        cookieType: cookie
      }
    });
  };



    //On the line below create the postMessage method. This method will add data to the backend server.
    //Because we're making a POST request, we need a way to tell the server the data we want to give it, in your $http call (along with url and method) have a data property which has a value that is equal to another object with a key of message and a value of the message being passed to parse. IE data: {message: yourMessage}
    //Also, remember that $http returns a promise. So if you return the whole $http call (return $http(...)), you can then use .then in your controller.

  }]);
})();
