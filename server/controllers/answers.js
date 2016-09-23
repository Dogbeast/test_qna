console.log('server/controller/answer.js');
var mongoose = require('mongoose');
var Answer = mongoose.model('Answer');
var Question = mongoose.model('Question');
var User = mongoose.model('User');

function AnswerController(){
	this.create = function(req, res){
		var answer = new Answer({answer:req.body.answer, detail:req.body.detail, likes:0, _user:req.body.id, _question:req.body.qid})
		answer.save(function(err, success){
			if(err){
				res.json(err)
			} else {
				User.findByIdAndUpdate(success._user, {$push: {_answers: success._id}}, {safe:true, upsert:true, new:true}, function(err, person){
					// console.log(person)
				});
				Question.findByIdAndUpdate(success._question, {$push: {_answers: success._id}}, {safe:true, upsert:true, new:true}, function(err, question){
					// console.log(question)
				});
				res.json(success);
			}
		})
	};
	this.addLike = function(req, res){
		Answer.findByIdAndUpdate(req.body.aid, {$inc: { likes: 1}}).exec();
		res.json({'answer like': 'success'});
	}
}
module.exports =  new AnswerController();