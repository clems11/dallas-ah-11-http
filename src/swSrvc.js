angular.module("httpFun")
    .service("starWarsService", function($http) {

        this.getSWData = function() {
          // this is a simple request to hit a server and pull data through an api
            return $http({
              method: "GET"
              , url: "http://swapi.co/api/films/1"
            }).then(function successCallback(response) {
              console.log(response);
              return response.data;
            }, function errorCallback (response) {
              console.log(response);
            })
        }
    });
