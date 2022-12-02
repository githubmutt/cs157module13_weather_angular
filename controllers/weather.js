
/*

go to index.html and look at the
   var myApp = angular.module("myApp", ["ngRoute"])
      
          myApp.config( function($routeProvider)
          inside are the routes
          /weather
          /weather/zip?
          
so $routeParams will contain zip   if the URL is weather/92009    (sample zip code)

*/

myApp.controller("weatherController", function($scope, $http, $routeParams) {


  if ( $routeParams.zip)
    $scope.zipCode = $routeParams.zip
  else
     $scope.zipCode = "95126"

 $scope.icon = "/naicon.png"

  //<body ng-controller="weatherController" ng-init="loader()">

  $scope.loader = () => {
    console.log("weather loader called ")
    $scope.zipcode = "90029"
    $scope.icon = "/naicon.png"

  }





  $scope.getWeather = function(zipCode) {
    $http.get("https://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ",us&appid=000c53231273df2ac9323e70eee830d4&units=imperial")
      .then(function(response) {
        $scope.locationName = response.data.name + ", " + response.data.sys.country;
        $scope.condition = response.data.weather[0].main;
        $scope.weatherIcon = response.data.weather[0].icon;
        $scope.currentTemp = Math.round(response.data.main.temp);
        $scope.minTemp = Math.round(response.data.main.temp_min);
        $scope.maxTemp = Math.round(response.data.main.temp_max);
        $scope.windSpeed = Math.round(response.data.wind.speed);
        $scope.humidity = Math.round(response.data.main.humidity);
        $scope.pressure = Math.round(response.data.main.pressure);

        sessionStore.setItem("googlemap", zipCode)
      });
  };
});