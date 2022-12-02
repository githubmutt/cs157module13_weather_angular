



//https://www.c-sharpcorner.com/article/angularjs-from-beginning-google-map-api-with-angular-js-p/


//https://stackoverflow.com/questions/46738512/angularjs-google-map-api-integration


myApp.controller("mapController" ,function( $scope ){

  $scope.init = function() {
      console.log("loading init ")
/*
      $scope.mapOptions = {
        zoom: 8,
        center: new google.maps.LatLng(22.649907498685803, 88.36255413913727)

      }

    $scope.map = new google.maps.Map(document.getElementById('kc-map'), $scope.mapOptions);
*/
   }

})



  /*

  $scope.loadScript = function() {
 
    $scope.mapOptions = {
        zoom: 8,
        center: new google.maps.LatLng(22.649907498685803, 88.36255413913727)

    }

    $scope.map = new google.maps.Map(document.getElementById('kc-map'), $scope.mapOptions);

 }
 
*/
 //     src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCkZlE_5gFrePXOqPfBlhIKzwaVcUJVIUo&callback=initMap&v=weekly"
/*
  $scope.loadScript = function() {
      
      var script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = "https://maps.googleapis.com/maps/api/js?key="
      script.src += "AIzaSyCkZlE_5gFrePXOqPfBlhIKzwaVcUJVIUo"
      script.src += "&callback=initialize"

      document.body.appendChild (script)

      setTimeout(function() {
        $scope.init();
    }, 500);
  }
*/














/*

myApp.controller("mapController", function($scope , $http) {

  //https://maps.googleapis.com/maps/api/geocode/json?address=95126&key=AIzaSyCkZlE_5gFrePXOqPfBlhIKzwaVcUJVIUo

 // $scope.lat = 34.0880507
 // $scope.lng = -118.2965121

  $scope.googleMapArgs = {
        width: '50%',
        height: '50%',
        allowMultipleMark: false

  }

  $scope.fnClick = function () {  
    $scope.googleMapArgs.method.setMark(51.508515, -0.125487, 'London', 'Just some content');  
}

})

*/
