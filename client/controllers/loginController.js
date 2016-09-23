app.controller('loginController', function($scope, $cookies, userFactory){

	$scope.getUser = function(){
		var object = $scope.name
		userFactory.login({'username':object}, function(returnedData){
			$scope.person = returnedData;
			// SETS COOKIES USERID AS THE ID OF THE DATA RETURNED
			$cookies.userId = returnedData._id;
			$cookies.username = returnedData.username;
			// RESETS THE USER FIELD TO NULL
			$scope.user = null;
			window.location = '#/';
		})
	}
});