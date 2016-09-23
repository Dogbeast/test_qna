var mongoose = require('mongoose');

var questionSchema = new mongoose.Schema({
	question: {type: String, required: true, validate: [validator, "Question needs to be more than 10 characters long."]},
	description: {type: String},
	_user: {type: mongoose.Schema.ObjectId, ref: 'User'},
	_answers: [{type: String, ref: 'Answer'}]
});
// VALIDATES THE FIELD THAT IT IS GREATER THAN 10
function validator(v){
	return v.length > 10;
};

mongoose.model("Question", questionSchema);