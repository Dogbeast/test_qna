app.controller('new_answerController', function($scope, $cookies, $routeParams, answerFactory, questionFactory){
	$scope.createAnswer = function(){
		var answer = $scope.answerText;
		var details = $scope.detailsText;
		var id = $cookies.userId;
		var qid = questionid;
		answerFactory.createAnswer(answer, details, id, qid, function(callback){
			console.log(callback);
			if(callback.errors){
				$scope.ERROR = callback.errors.answer.message;
			} else {
				window.location = '#/';
			}
		})
	}
	$scope.getQuestion = function(id){
		questionFactory.getQuestion(id, function(callback){
			$scope.question = callback;
		})
	}
	$scope.goToDashboard = function(){
		$scope.answerText = null;
		$scope.detailsText = null;
		window.location = '#/';
	}
	var questionid = $routeParams.id
	$scope.getQuestion(questionid);
});