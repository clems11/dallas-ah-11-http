angular.module("httpFun")
    .service("gifService", function($http) {

      var baseUrl = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=";

        this.getGifData = function(gifSearch) {
          // this is a simple request to hit a server and pull data through an api
            return $http({
              method: "GET"
              , url: baseUrl + gifSearch
            }).then(function successCallback(responseGif) {
              console.log(responseGif);
              return responseGif.data;
            }, function errorCallback (responseGif) {
              console.log(responseGif);
            })
        }

        // this.getGiphy = function (gifSearch) {
        //   return $http.get(baseUrl + gifSearch)
        //     .then(function(response) {
        //       response.data;
        //     })
        // }


    });
