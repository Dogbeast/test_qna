app.controller('new_questionController', function($scope, $cookies, questionFactory){
	$scope.createQuestion = function(){
		// CREATE A NEW QUESTION AND GETS THE REQUIRED VARIABLES
		var questionText = $scope.questionText;
		var descriptionText = $scope.descriptionText;
		var id = $cookies.userId;
		// SENDS THE INFO TO THE QUESTION FACTORY
		questionFactory.createQuestion(questionText, descriptionText, id, function(callback){
			if(callback.errors){
				// IF ERROR IS RETURNED THEN IT SAVES IT AS A VARIABLE
				$scope.ERROR = callback.errors.question.message;
			} else {
				// IF SUCCESSFUL THEN IT REDIRECTS USER TO HOME
				window.location = '#/';
			}
		})
	}
	$scope.goToDashboard = function(){
		// RESETS THE FIELDS TO NULL AND SENDS USER BACK TO HOME
		$scope.questionText = null;
		$scope.descriptionText = null;
		window.location = '#/';
	}
});