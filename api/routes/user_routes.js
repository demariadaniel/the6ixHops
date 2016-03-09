var express      = require('express');
var router       = express.Router();
var User = require('./../models/Users');

router.get('/allUsers', function(req, res){
	console.log(".find");
    User.find({}, function(err, Users) {
        if (err) {
            console.log(err);
        } else {
            console.log(Users);
            res.send(Users);
        }
    });
});


router.get('/:id', function(req, res){
    console.log('Getting Product with ID: '+req.params.id);
    User.findById(req.params.id, function(err, user) {
        if (err) {
            console.log(err);
        } else {
            console.log(user);
            res.send(user);
        }
    });
    console.log('Running Id');
});


router.post('/newUser', function(req, res){
        console.log(".post");
        var newUser = User({
        	name: req.body.name,
        	email: req.body.email
        });
        newUser.save(function (err){
            if (err) {
                console.log(err)
            } else {
                console.log(newUser);
                res.json('newUser');
            }
        });
});

router.put('/:id', function(req, res) {
	var identify = req.params.id;
    var query = { "_id": identify }
	console.log("Update ID: " + identify);
	var updateInfo = {
                name: req.body.name,
                email: req.body.email,
    	};
    console.log(updateInfo);
    User.update(query,updateInfo,{},function(err,user){
        if(err){
            console.log(err);
        }
        else{
            console.log(user);
            res.send('hi');
        }
    });
})

router.delete('/:id', function(req, res) {
	var identify = req.params.id;
  	User.findByIdAndRemove(identify, function (err, user) {
      if (err) {
            console.log(err);
        } else {
            console.log(user);
            res.send(user);
        }
  });
});

module.exports = router;