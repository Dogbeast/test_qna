console.log('server/models/question.js is running');

var mongoose = require('mongoose');

var questionSchema = new mongoose.Schema({
	question: {type: String, required: true, validate: [validator, "Question needs to be more than 10 characters long."]},
	description: {type: String},
	_user: {type: mongoose.Schema.ObjectId, ref: 'User'},
	_answers: [{type: String, ref: 'Answer'}]
});

function validator(v){
	return v.length > 10;
};

mongoose.model("Question", questionSchema);