angular
	.module('app')
	.controller('editBeersCtrl', editBeersCtrl);

	function editBeersCtrl(dbService, $state, Upload) {
		var ctrl = this;
		if (localStorage.authToken === undefined) {$state.go('login')};

			ctrl.testMsg = "Edit B";
			ctrl.dbService = dbService;
			ctrl.beers = [];
			ctrl.update = {
				name: "",
				brewery: "",
				type: "",
				image: "",
				description: "",
				sizes: "",
				strength: "",
				available: "",
				ingredients: "",
				pairs_well: "",
			}
			ctrl.createBeer = createBeer;
			ctrl.finish = finish;

			ctrl.getAll = getAll;
			ctrl.getOne = getOne;
			ctrl.post = post;
			ctrl.put = put;
			ctrl.del = del;

		function createBeer(beer){
			ctrl.beers.push(beer);
			ctrl.update = {
				name: "",
				brewery: "",
				type: "",
				image: "",
				description: "",
				sizes: "",
				strength: "",
				available: "",
				ingredients: "",
				pairs_well: "",
			};
		}

		function finish(beers){
			ctrl.dbService.newAccount.beers = beers;
			console.log(ctrl.dbService.newAccount);
			dbService.post('/api/users/newUser', dbService.newAccount.user);
			dbService.post('/api/breweries/newBrewery', dbService.newAccount.brewery);
			for (var n = 0; n<dbService.newAccount.beers.length; n++){
					var beer = dbService.newAccount.beers[n];
					console.log(beer);
					dbService.post('/api/beers/newBeer', beer);
			}
			$state.go("adminPanel");
		};


		function getAll(){
			console.log("getAll");
			var addr = '/api/beers/allBeers';
			dbService.getAll(addr).then(function(res){
					ctrl.beers = res;
			});
		};

		function getOne(id){
			var addr = '/api/beers/';
			dbService.getOne(addr, id).then(function(res){
					ctrl.beers = [];
					ctrl.beers.push(res);
			});
		};

		function post(newBeer){
			console.log("post");
			var addr = '/api/beers/newBeer';
			dbService.post(addr, newBeer).then(function(res){
				if (res) {ctrl.getAll()}
			})
		};

		function put(id, update){
			console.log('PUT request id: ' + id);
			var addr = '/api/beers/';
			dbService.put(addr, id, update).then(function(res){
			if (res) ctrl.getAll();
		});
	};

		function del(id){
			console.log("del");
			var addr = '/api/beers/';
			dbService.del(addr, id).then(function(res){
			if (res) ctrl.getAll();
		});
	};

		function upload(file, path) {
		file.upload = Upload.upload({
			url: '/api/photo/',
			data: {file: file}
		})
		.then(function(res) {
					ctrl.update.image = 'http://localhost:8080/uploads/' + res.data[0].filename;
		}, function(err) {
			console.log(err);
		})
	}


}