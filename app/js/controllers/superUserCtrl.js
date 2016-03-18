angular
	.module('app')
	.controller('superUserCtrl', superUserCtrl);

	function superUserCtrl(dbService, $state, Upload) {
		var ctrl = this;

			ctrl.testMsg = "Edit C";
			ctrl.dbService = dbService;

			ctrl.users = [];
			ctrl.user = {
				name: "",
				email: "",
				password: "",
				image: "",
			}

			ctrl.breweries = [];
			ctrl.brewery = {
				name: "",
				street:"",
				city:"",
				province:"",
				postcode:"",
				description: "",
				telephone: "",
				email: "",
				image_thumb: "",
				image_main: "",
				hours: "",
				social: "",
				beers: "",
				events: ""
			}

			ctrl.beers = [];
			ctrl.beer = {
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
				draft: ""
			}

			ctrl.getAllUsers = getAllUsers;
			ctrl.getAllBreweries = getAllBreweries;
			ctrl.getAllBeers = getAllBeers;
			ctrl.getOneUser = getOneUser;
			ctrl.getOneBrewery = getOneBrewery;
			ctrl.getOneBeer = getOneBeer;
			ctrl.postUser = postUser;
			ctrl.postBrewery = postBrewery;
			ctrl.postBeer = postBeer;
			ctrl.putUser = putUser;
			ctrl.putBrewery = putBrewery;
			ctrl.putBeer = putBeer;
			ctrl.delUser = delUser;
			ctrl.delBrewery = delBrewery;
			ctrl.delBeer = delBeer;
			ctrl.upload = upload;

		function getAllUsers() {
			console.log("get");
			dbService.getAll('/api/users/allUsers').then(function(res){
				console.log("res");
				ctrl.users = res;
			})
		};

		function getAllBreweries() {
			dbService.getAll('/api/breweries/allBreweries').then(function(res){
				ctrl.breweries = res;
			})
		};

		function getAllBeers() {
			dbService.getAll('/api/beers/allBeers').then(function(res){
				ctrl.beers = res;
			})
		};

		function getOneUser(addr, id){
			dbService.getOne(addr, id).then(function(res){
					ctrl.users = [];
					ctrl.users.push(res);
			});
		};

		function getOneBrewery(addr, id){
			dbService.getOne(addr, id).then(function(res){
					ctrl.breweries = [];
					ctrl.breweries.push(res);
			});
		};

		function getOneBeer(addr, id){
			dbService.getOne(addr, id).then(function(res){
					ctrl.beers = [];
					ctrl.beers.push(res);
			});
		};

		function postUser(addr, newItem){
			console.log("post");
			dbService.post(addr, newItem).then(function(res){
				if (res) {ctrl.getAllUsers()}
			})
		};

		function postBrewery(addr, newItem){
			console.log("post");
			dbService.post(addr, newItem).then(function(res){
				if (res) {ctrl.getAllBreweries()}
			})
		};

		function postBeer(addr, newItem){
			console.log("post");
			dbService.post(addr, newItem).then(function(res){
				if (res) {ctrl.getAllBeers()}
			})
		};

		function putUser(addr, id, update){
			console.log('PUT request id: ' + id);
			dbService.put(addr, id, update).then(function(res){
			if (res) ctrl.getAllUsers();
		});
	};

		function putBrewery(addr, id, update){
			console.log('PUT request id: ' + id);
			dbService.put(addr, id, update).then(function(res){
			if (res) ctrl.getAllBreweries();
		});
	};

		function putBeer(addr, id, update){
			console.log('PUT request id: ' + id);
			dbService.put(addr, id, update).then(function(res){
			if (res) ctrl.getAllBeers();
		});
	};

		function delUser(addr, id, data){
			console.log("del");
			dbService.del(addr, id).then(function(res){
			if (res) ctrl.getAllUsers();
		});
	};

		function delBrewery(addr, id, data){
			console.log("del");
			dbService.del(addr, id).then(function(res){
			if (res) ctrl.getAllBreweries();
		});
	};

		function delBeer(addr, id, data){
			console.log("del");
			dbService.del(addr, id).then(function(res){
			if (res) ctrl.getAllBeers();
		});
	};

		function upload(file, path) {
			file.upload = Upload.upload({
				url: '/api/photo/',
				data: {file: file}
			})
			.then(function(res) {
				if (path === "user_image"){
						ctrl.user.image = 'http://localhost:8080/uploads/' + res.data[0].filename;
					} else if (path === "image_main") {
						ctrl.brewery.image_main = 'http://localhost:8080/uploads/' + res.data[0].filename;
					} else if (path === "image_thumb") {
						ctrl.brewery.image_thumb = 'http://localhost:8080/uploads/' + res.data[0].filename;	
				} else if (path === "beer_image") {
						ctrl.beer.image = 'http://localhost:8080/uploads/' + res.data[0].filename;	
				}

			}, function(err) {
				console.log(err);
			})
		};
}