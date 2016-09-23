app.controller('showQuestionController', function($scope, $routeParams, questionFactory, answerFactory){
	$scope.getQuestion = function(id){
		// GETS THE QUESTION BASED ON ITS ID
		questionFactory.getQuestion(id, function(callback){
			$scope.question = callback;
		})
	}
	$scope.addLike = function(answerId){
		// INCREMENTS THE LIKE FIELD
		answerFactory.addLike(answerId, function(callback){
			$scope.getQuestion($routeParams.id);
		})
	}
	// WHEN CONTROLLER IS LOADED (ON PAGE LOAD), THE QUESTION IS RETRIEVED IMMEDIATELY
	$scope.getQuestion($routeParams.id);
});