console.log('server/models/user.js is running');

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	username: {type: String, required: true},
	_questions: [{type: String, ref: 'Question'}],
	_answers: [{type: String, ref: 'Answer'}]
});

mongoose.model("User", userSchema);