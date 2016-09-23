console.log('server/controller/question.js');
var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var User = mongoose.model('User');

function QuestionController(){
	this.index = function(req, res){
		Question.find({})
		.populate('_answers _user')
		.exec(function(err, questions){
			if(err){
				console.log(err)
			} else {
				res.json(questions)
			}
		})
	};
	this.create = function(req, res){
		var question = new Question({question:req.body.question, description:req.body.description, _user:req.body.id});
		question.save(function(err, success){
			if(err){
				res.json(err)
			} else {
				User.findByIdAndUpdate(success._user, {$push: {_questions: success._id}}, {safe:true, upsert:true, new:true}, function(err, person){
					res.json(person);
				});
			}
		})
	};
	this.show = function(req, res){
		Question.findOne({_id:req.params.id})
		.populate('_answers _user')
		.populate({path: '_answers', populate: {path: '_user'}})
		.exec(function(err, questions){
			if(err){
				console.log(err)
			} else {
				res.json(questions)
			}
		})
	};
}

module.exports =  new QuestionController();