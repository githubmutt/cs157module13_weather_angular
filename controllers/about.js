myApp.controller("aboutController", function($scope) {

  //https://maps.googleapis.com/maps/api/geocode/json?address=95126&key=AIzaSyCkZlE_5gFrePXOqPfBlhIKzwaVcUJVIUo

  $scope.lat = 34.0880507
  $scope.lng = -118.2965121




})

/*
let zipCode = "95125"
$http.get("https://maps.googleapis.com/maps/api/geocode/json?address" + zipCode + "&key=AIzaSyCkZlE_5gFrePXOqPfBlhIKzwaVcUJVIUo")
  .then(function(response) {

    $scope.lat = "37.3290122"
    $scope.long = "-121.9160211"

    <!--
// LA City College
//   "lat" : 34.0880507,
//   "lng" : -118.2965121
    -->

  })

*/