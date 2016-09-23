app.controller('dashboardController', function($scope, $cookies, questionFactory){
	$scope.getAllQuestions = function(){
		questionFactory.getAllQuestions(function(callback){
			$scope.allQuestions = callback;
		})
	}
	$scope.getAllQuestions();
	$scope.username = $cookies.username;
});