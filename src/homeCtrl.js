angular.module("httpFun")
    .controller("homeCtrl", function($scope, starWarsService, gifService ) {

      $scope.test = "hi";

      starWarsService.getSWData()/// this line goes to get the data but doesn"t put in on the html yet you have to tell it to with a .then function
        .then(function(response) {
          console.log(response);
          $scope.swData = response;
        });


      $scope.getGifData = function() {
        console.log($scope.searchGif);
        gifService.getGifData($scope.searchGif)
          .then(function(responseGif){
            console.log(responseGif)
            $scope.gifData = returnedGif.fixed_height_downsampled_url;
          })
      }
});
