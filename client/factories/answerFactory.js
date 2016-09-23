app.factory('answerFactory', function($http){

	function AnswerFactory(){
		this.createAnswer = function(userAnswer, userDetails, userId, questionId, callback){
			// SENDS A POST REQUEST TO THE SERVER TO CREATE A NEW ANSWER
			$http.post('/answer', {answer:userAnswer, detail:userDetails, id:userId, qid:questionId})
			.then(function(returnedData, err){
				if(err){
					console.log(err);
				} else {
					callback(returnedData.data);
				}
			})
		}
		this.addLike = function(answerId, callback){
			// SENDS A POST REQUEST TO THE SERVER TO INCREMENT THE LIKE FIELD
			$http.post('/like', {aid:answerId})
			.then(function(returnedData, err){
				if(err){
					console.log(err);
				} else {
					callback(returnedData.data);
				}
			})
		}
	}
	return new AnswerFactory();
})