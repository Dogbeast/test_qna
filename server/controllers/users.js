var mongoose = require('mongoose');
var User = mongoose.model('User');

function UsersController(){
	this.index = function(req, res){
		// TRIES TO FIND THE APPROPRIATE USER IN THE DATABASE
		// UPON FAILURE, A NEW USER IS CREATED AND THE PERSON NOW HAS THAT IDENTITY
		// UPON SUCCESS, THE PERSON NOW USES THE IDENTITY OF THE USER RETREIVED
		var name = req.body.username;
		User.findOne({username:name}, function(err, found_user){
			if(err){
				res.json({error:'something wrong with the fineOne method'});
			} else {
				if(found_user == null){
					var person = new User({username:name});
					person.save(function(err, success){
						if(err){
							res.json("creating new user didn't work!");
						} else {
							req.session.userId = success._id;
							res.json(success);
						}
					})
				} else {
					req.session.userId = found_user._id;
					res.json(found_user);
				}
			}
		})
	};
}

module.exports =  new UsersController();