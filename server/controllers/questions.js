var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var User = mongoose.model('User');

function QuestionController(){
	this.index = function(req, res){
		// FINDS THE QUESTION REQUESTED AND POPULATES ITS ANSWERS AND USER FIELD
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
		// CREATES A NEW QUESTION THEN UPDATES THE USERS MODEL ARRAY FIELD WITH THIS NEW OBJECT
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
		// FINDS THE QUESTION REQUIRED AND DOES A DEEP (2 LAYER) POPULATE
		// TO FIND THE USERS, ANSWERS, AND USERS OF THOSE ANSWERS
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