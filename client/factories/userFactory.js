app.factory('userFactory', function($http){

	function UserFactory(){
		
		this.login = function(object, callback){
			$http.post('/users', object)
			.then(function(returned_data){
				if(typeof(callback) == 'function'){
					callback(returned_data.data);
				}
			})
		}
		this.getUser = function(id, callback){
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