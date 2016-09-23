console.log('server/models/answer.js is running');

var mongoose = require('mongoose');

var answerSchema = new mongoose.Schema({
	answer: {type: String, required: true, validate: [validator, "Answer needs to be more than 5 characters long."]},
	detail: {type: String},
	likes: {type: Number},
	_user: {type: mongoose.Schema.ObjectId, ref: 'User'},
	_question: {type: mongoose.Schema.ObjectId, ref: 'Question'}
});

function validator(v){
	return v.length > 5;
};

mongoose.model("Answer", answerSchema);