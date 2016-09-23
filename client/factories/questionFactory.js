app.factory('questionFactory', function($http){

	function QuestionFactory(){
		this.getAllQuestions = function(callback){
			$http.get('/questions').then(function(returnedData){
				// SENDS RETURNEDDATA BACK TO THE CONTROLLER
				callback(returnedData.data);
			})
		}
		this.createQuestion = function(questionText, descriptionText, userId, callback){
			$http.post('/new_question', {question:questionText, description:descriptionText, id:userId})
			.then(function(returnedData){
				callback(returnedData.data);
			}, function(error){
				console.log('error: ', error);
			})
		}
		this.getQuestion = function(id, callback){
			$http.get('/question/'+id).then(function(returnedData){
				// SENDS RETURNEDDATA BACK TO THE CONTROLLER
				callback(returnedData.data);
			})
		}
	}
	return new QuestionFactory();
})