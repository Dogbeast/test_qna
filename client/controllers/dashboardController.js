app.controller('dashboardController', function($scope, $cookies, questionFactory){
	$scope.getAllQuestions = function(){
		questionFactory.getAllQuestions(function(callback){
			// GETS ALL QUESTIONS AND SAVES IT AS A VARIABLE
			$scope.allQuestions = callback;
		})
	}
	// WHEN CONTROLLER IS RUN (ON PAGE LOAD), THIS RUNS THE METHOD
	// AND SAVES THE USERNAME INTO A VARIABLE
	$scope.getAllQuestions();
	$scope.username = $cookies.username;
});