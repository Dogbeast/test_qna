app.controller('new_questionController', function($scope, $cookies, questionFactory){
	$scope.createQuestion = function(){
		var questionText = $scope.questionText;
		var descriptionText = $scope.descriptionText;
		var id = $cookies.userId;
		questionFactory.createQuestion(questionText, descriptionText, id, function(callback){
			if(callback.errors){
				$scope.ERROR = callback.errors.question.message;
			} else {
				window.location = '#/';
			}
		})
	}
	$scope.goToDashboard = function(){
		$scope.questionText = null;
		$scope.descriptionText = null;
		window.location = '#/';
	}
});