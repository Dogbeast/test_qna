app.factory('userFactory', function($http){

	function UserFactory(){
		
		this.login = function(object, callback){
			// SENDS A POST REQUEST TO THE SERVER TO EITHER CREATE A NEW USER OR USE AN EXISTING USER
			$http.post('/users', object)
			.then(function(returned_data){
				if(typeof(callback) == 'function'){
					callback(returned_data.data);
				}
			})
		}
		this.getUser = function(id, callback){
			// GETS THE USER FROM THE SERVER
			$http.post('/user', {userId:id})
			.then(function(returned_data){
				if(typeof(callback) == 'function'){
					callback(returned_data.data)
				}
			})
		}
	}
	return new UserFactory();
})