  var app = angular.module("myapp",['angular.filter']);

   app.controller("ctrl",function($scope,$http){

		$scope.page = "home";

	  $scope.getEvents = function(){

		    var events = [];

		 	  try {
				  events = JSON.parse(localStorage.events);
			  } catch(e){

		  }

			  $scope.events = events;


	  }

})
