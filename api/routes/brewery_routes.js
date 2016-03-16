var express      = require('express');
var router       = express.Router();
var Brewery = require('./../models/Breweries');

router.get('/allBreweries', function(req, res){
	console.log(".find");
    Brewery.find({}, function(err, Breweries) {
        if (err) {
            console.log(err);
        } else {
            console.log(Breweries);
            res.send(Breweries);
        }
    });
});


router.get('/:id', function(req, res){
    console.log('Getting Product with ID: '+req.params.id);
    Brewery.findById(req.params.id, function(err, brewery) {
        if (err) {
            console.log(err);
        } else {
            console.log(brewery);
            res.send(brewery);
        }
    });
    console.log('Running Id');
});


router.post('/newBrewery', function(req, res){
        console.log(".post");
        var newBrewery = Brewery({
        	name: req.body.name,
            street: req.body.street,
            city: req.body.city,
            province: req.body.province,
            postcode: req.body.postcode,
            telephone: req.body.telephone,
            email: req.body.email,
            image_thumb: req.body.image_thumb,
            image_main: req.body.image_main,
            hours: req.body.hours,
            twitter: req.body.social,
            facebook: req.body.beers,
            instagram: req.body.events
        });
        newBrewery.save(function (err){
            if (err) {
                console.log(err)
            } else {
                console.log(newBrewery);
                res.send(true);
            }
        });
});

router.put('/:id', function(req, res) {
	var identify = req.params.id;
    var query = { "_id": identify }
	console.log("Update ID: " + identify);
	var updateInfo = {
            name: req.body.name,
            address: req.body.address,
            telephone: req.body.telephone,
            email: req.body.email,
            image_thumb: req.body.image_thumb,
            image_main: req.body.image_main,
            hours: req.body.hours,
            twitter: req.body.social,
            facebook: req.body.beers,
            instagram: req.body.events
    	};
    console.log(updateInfo);
    Brewery.update(query,updateInfo,{},function(err,brewery){
        if(err){
            console.log(err);
        }
        else{
            console.log(brewery);
            res.send('hi');
        }
    });
})

router.delete('/:id', function(req, res) {
	var identify = req.params.id;
  	Brewery.findByIdAndRemove(identify, function (err, brewery) {
      if (err) {
            console.log(err);
        } else {
            console.log(brewery);
            res.send(brewery);
        }
  });
});

module.exports = router;