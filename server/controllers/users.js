console.log('server/controller/users.js');
var mongoose = require('mongoose');
var User = mongoose.model('User');

function UsersController(){
	this.index = function(req, res){
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
	this.show = function(req, res){
		res.json({'users show': 'success'})
	};
}

module.exports =  new UsersController();