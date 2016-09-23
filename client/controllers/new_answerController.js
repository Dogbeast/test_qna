app.controller('new_answerController', function($scope, $cookies, $routeParams, answerFactory, questionFactory){
	$scope.createAnswer = function(){
		// GRABS ALL RELEVENT DATA AND SAVES IT INTO A TEMP VARIABLE
		var answer = $scope.answerText;
		var details = $scope.detailsText;
		var id = $cookies.userId;
		var qid = questionid;
		// SENDS ALL THE DATA TO THE ANSWER FACTORY
		answerFactory.createAnswer(answer, details, id, qid, function(callback){
			console.log(callback);
			if(callback.errors){
				// IF ERROR IS RETURNED THEN IT SAVES IT AS A VARIABLE
				$scope.ERROR = callback.errors.answer.message;
			} else {
				// IF SUCCESSFUL THEN REDIRECTS THE USER TO THE HOME PAGE
				window.location = '#/';
			}
		})
	}
	$scope.getQuestion = function(id){
		// GETS THE QUESTION BASED ON ITS ID
		questionFactory.getQuestion(id, function(callback){
			$scope.question = callback;
		})
	}
	$scope.goToDashboard = function(){
		// RESETS THE FIELDS TO NULL AND SENDS USER BACK TO HOME
		$scope.answerText = null;
		$scope.detailsText = null;
		window.location = '#/';
	}
	// WHEN CONTROLLER IS RUN (ON PAGE LOAD), THE GETQUESTION IS INVOKED
	var questionid = $routeParams.id
	$scope.getQuestion(questionid);
});