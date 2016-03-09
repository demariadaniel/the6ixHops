var express      = require('express');
var router       = express.Router();
var Beer = require('./../models/Beers');

router.get('/allBeers', function(req, res){
	console.log(".find");
    Beer.find({}, function(err, Beers) {
        if (err) {
            console.log(err);
        } else {
            console.log(Beers);
            res.send(Beers);
        }
    });
});


router.get('/:id', function(req, res){
    console.log('Getting Product with ID: '+req.params.id);
    Beer.findById(req.params.id, function(err, beer) {
        if (err) {
            console.log(err);
        } else {
            console.log(beer);
            res.send(beer);
        }
    });
    console.log('Running Id');
});


router.post('/newBeer', function(req, res){
        console.log(".post");
        var newBeer = Beer({
        	name: req.body.name,
        	type: req.body.type
        });
        newBeer.save(function (err){
            if (err) {
                console.log(err)
            } else {
                console.log(newBeer);
                res.json('newBeer');
            }
        });
});

router.put('/:id', function(req, res) {
	var identify = req.params.id;
    var query = { "_id": identify }
	console.log("Update ID: " + identify);
	var updateInfo = {
                name: req.body.name,
                type: req.body.type,
    	};
    console.log(updateInfo);
    Beer.update(query,updateInfo,{},function(err,beer){
        if(err){
            console.log(err);
        }
        else{
            console.log(beer);
            res.send('hi');
        }
    });
})

router.delete('/:id', function(req, res) {
	var identify = req.params.id;
  	Beer.findByIdAndRemove(identify, function (err, beer) {
      if (err) {
            console.log(err);
        } else {
            console.log(beer);
            res.send(beer);
        }
  });
});

module.exports = router;