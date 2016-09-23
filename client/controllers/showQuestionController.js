app.controller('showQuestionController', function($scope, $routeParams, questionFactory, answerFactory){
	$scope.getQuestion = function(id){
		questionFactory.getQuestion(id, function(callback){
			$scope.question = callback;
		})
	}
	$scope.addLike = function(answerId){
		answerFactory.addLike(answerId, function(callback){
			$scope.getQuestion($routeParams.id);
		})
	}
	$scope.getQuestion($routeParams.id);
});